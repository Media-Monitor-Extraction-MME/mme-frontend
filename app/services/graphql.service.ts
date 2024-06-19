import 'server-only';
import { getSession, Claims } from '@auth0/nextjs-auth0';

export type GraphQLDataType = {
  errors: Array<{
    message: string;
    location: any;
    path: any;
    extensions: any;
  }>;
  data: {
    user?: {
      user_id?: string;
      picture?: string;
      email?: string;
    };
    userTask?: {
      userId?: string;
      keywords?: Array<{
        keyword?: string;
        secondaryKeywords?: string[];
        excludedKeywords?: string[];
      }>;
      platforms?: string[];
    };
    posts?: Array<{
      title?: string;
    }>;
    mentions?: Array<{
      keyword?: string;
      count?: number;
      date?: string;
      sentiment?: {
        positive?: number;
        neutral?: number;
        negative?: number;
      };
    }>;
  };
};
export const getGraphQLData = async (): Promise<GraphQLDataType | null> => {
  const session = await getSession();

  if (!session) {
    return null;
  }

  const response = await fetch('http://localhost:3001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.accessToken}`
    },
    body: JSON.stringify({
      query: `
        query {
          user {
            user_id,
            picture,
            email,
          },
          userTask {
            userId,
            keywords {
              keyword,
              secondaryKeywords,
              excludedKeywords,
            },
          },
          posts {
            title,
          },
          mentions {
            keyword,
            count,
            date,
            sentiment {
              positive,
              neutral,
              negative,
            },
          },
        }
      `
    })
  }).then(async (data) => {
    return (await data.json()) as GraphQLDataType;
  });

  return response;
};
