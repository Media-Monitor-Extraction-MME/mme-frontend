import React from 'react';
import BoardingHeader from '@/components/BoardingHeader';
import '@/onboarding/_styles/layout.scss';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { UserRedirect } from '@/_providers/Providers';
import AccessTokenProvider from '@/_providers/AccessTokenProvider';
export const metadata = {
  title: 'Peek Dashboard',
  description:
    'A dashboard displaying the sentiment analysis of a few user selected keywords.'
};
import { getAccessToken as getAuth0AccessToken } from '@auth0/nextjs-auth0';

const getAccessToken = async () => {
  const { accessToken } = await getAuth0AccessToken();
  return accessToken;
};
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const accessToken = getAccessToken();

  return (
    <UserProvider>
      <AccessTokenProvider accessToken={accessToken}>
        <UserRedirect>
          <BoardingHeader />
          <div className="onboarding-holder">{children}</div>
        </UserRedirect>
      </AccessTokenProvider>
    </UserProvider>
  );
};

export default Layout;
