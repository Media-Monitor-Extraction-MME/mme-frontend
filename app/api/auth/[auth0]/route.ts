import {
  Session,
  handleAuth,
  handleCallback,
  handleLogin
} from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';

async function afterCallbackV2(
  req: NextRequest,
  session: Session,
  state?: { [key: string]: any }
): Promise<Session | Response | undefined> {
  if (session.user['first_sign_up'] === true) {
    if (state) {
      state.returnTo = '/onboarding';
    }
    return session;
  } else {
    const response = await fetch('http://localhost:3001/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.accessToken}`
      },
      body: JSON.stringify({
        query: `
          query {
            userTask {
              userId
            }
          }
        `
      })
    });

    const data = (await response.json()).data as { userTask: any };
    if (!data.userTask || data.userTask.userId !== session.user.sub) {
      if (state) {
        state.returnTo = '/onboarding';
      }
    }
  }

  return session;
}
export const GET = handleAuth({
  async login(req: NextApiRequest, res: NextApiResponse) {
    return await handleLogin(req, res, {
      returnTo: '/dashboard'
    });
  },
  callback: async (req: NextApiRequest, res: NextApiResponse) => {
    return await handleCallback(req, res, { afterCallback: afterCallbackV2 });
  }
});
