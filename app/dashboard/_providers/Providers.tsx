import { UserProvider } from '@auth0/nextjs-auth0/client';
import React from 'react';
import KeywordProvider from './KeywordProvider';
import { getSession, Session } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

const UserRedirect: React.FC<{
  children: React.ReactNode;
}> = async ({ children }) => {
  const session = await getSession();
  if (!session) {
    redirect('/api/auth/login');
    return <></>;
  }
  return <>{children}</>;
};

const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div>
      <UserProvider>
        <UserRedirect>
          <KeywordProvider>{children}</KeywordProvider>
        </UserRedirect>
      </UserProvider>
    </div>
  );
};

export default Providers;
