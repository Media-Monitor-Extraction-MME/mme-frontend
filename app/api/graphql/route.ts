import { getSession } from '@auth0/nextjs-auth0';
import { NextResponse, NextRequest } from 'next/server';

type PostType = {
  title?: string;
  subReddit?: string;
  origin?: 'Reddit' | 'X';
  upvotes?: number;
  description?: string;
  url?: string;
  time?: string;
  collectiveSentiment?: {
    positive?: number;
    negative?: number;
    neutral?: number;
  };
};

type UserTask = {
  userId?: string;
  keywords?: Array<{
    keyword?: string;
    secondaryKeywords?: string[];
    excludedKeywords?: string[];
  }>;
  platforms?: string[];
};

type MentionType = {
  keyword?: string;
  count?: number;
  date?: string;
  sentiment?: {
    positive?: number;
    negative?: number;
    neutral?: number;
  };
};
export async function POST(
  req: NextRequest,
  res: NextResponse
): Promise<
  NextResponse<{
    posts?: PostType[];
    redditPosts?: PostType[];
    twitterPosts?: PostType[];
    userTask?: UserTask;
    mentions?: MentionType[];
  } | null>
> {
  const session = await getSession(req, res);
  const body = await req.json();

  if (session) {
    const content = await fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: `query { ${body} }` })
    }).then(async (data) => {
      return (await data.json()) as {
        posts?: PostType[];
        redditPosts?: PostType[];
        twitterPosts?: PostType[];
        userTask?: UserTask;
        mentions?: MentionType[];
      };
    });

    return NextResponse.json(content, {
      status: 200
    });
  }

  console.log(session, body);
  return NextResponse.json(null, {
    status: 500
  });
  // Use the session object as needed
  // ...

  // Use the currentUser object as needed
  // ...
}
