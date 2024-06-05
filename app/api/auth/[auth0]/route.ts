import {
  Session,
  handleAuth,
  handleCallback,
  handleLogin,
  updateSession
} from '@auth0/nextjs-auth0';
import { th } from '@faker-js/faker';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
import { After } from 'v8';

async function afterCallbackV2(
  req: NextRequest,
  session: Session,
  state?: { [key: string]: any }
): Promise<Session | Response | undefined> {
  console.log(session);

  if (session.user['first_sign_up'] === true) {
    if (state) {
      state.returnTo = '/onboarding';
    }
    return session;
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
