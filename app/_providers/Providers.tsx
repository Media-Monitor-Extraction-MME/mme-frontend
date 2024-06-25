import { UserProvider } from '@auth0/nextjs-auth0/client';
import React from 'react';
import KeywordProvider from './KeywordProvider';
import { getSession, Session } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import AccessTokenProvider from './AccessTokenProvider';
import { getAccessToken as getAuth0AccessToken } from '@auth0/nextjs-auth0';
import { getGraphQLData } from '@/services/graphql.service';

export const UserRedirect: React.FC<{
  children: React.ReactNode;
}> = async ({ children }) => {
  const session = await getSession();
  if (!session) {
    redirect('/api/auth/login');
    return <></>;
  }
  return <>{children}</>;
};

const getAccessToken = async () => {
  const { accessToken } = await getAuth0AccessToken();
  return accessToken;
};

const handleGraphQL = async (
  accessToken: Promise<string | undefined>,
  query: string
) => {
  const token = await accessToken;
  if (!token) {
    console.error('Failed to retrieve access token:', token);
    return;
  }
  console.log('Access token:', token);
  return fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: query })
  });
};

const Providers: React.FC<{
  children: React.ReactNode;
}> = async ({ children }) => {
  const accessToken = getAccessToken();
  const dashboardContent = await getGraphQLData();

  return (
    <div>
      <UserProvider>
        <AccessTokenProvider accessToken={accessToken}>
          <UserRedirect>
            <KeywordProvider>{children}</KeywordProvider>
          </UserRedirect>
        </AccessTokenProvider>
      </UserProvider>
    </div>
  );
};

export default Providers;
