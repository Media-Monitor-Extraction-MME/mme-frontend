'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAccessToken } from '@auth0/nextjs-auth0';

interface AccessTokenProviderProps {
  children: React.ReactNode;
  accessToken: Promise<string | undefined>;
}

interface AccessTokenContextProps {
  accessToken: string | null;
}

const AccessTokenContext = createContext<AccessTokenContextProps>({
  accessToken: null
});

export const useAccessToken = () => useContext(AccessTokenContext);

const AccessTokenProvider: React.FC<AccessTokenProviderProps> = ({
  children,
  accessToken
}) => {
  // const token = getAccessToken();
  const [clientAccessToken, setClientAccessToken] = useState<string | null>(
    null
  );

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const token = await accessToken;
        console.log(token);
        setClientAccessToken(token ?? '');
      } catch (error) {
        console.error('Failed to retrieve access token:', error);
      }
    };

    fetchAccessToken();
  }, []);

  return (
    <AccessTokenContext.Provider value={{ accessToken: clientAccessToken }}>
      {children}
    </AccessTokenContext.Provider>
  );
};

export default AccessTokenProvider;
