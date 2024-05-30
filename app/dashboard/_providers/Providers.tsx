import { UserProvider } from '@auth0/nextjs-auth0/client';
import React from 'react';
import KeywordProvider from './KeywordProvider';

const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div>
      <UserProvider>
        <KeywordProvider>{children}</KeywordProvider>
      </UserProvider>
    </div>
  );
};

export default Providers;
