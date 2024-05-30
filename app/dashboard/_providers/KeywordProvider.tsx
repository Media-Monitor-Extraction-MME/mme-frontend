'use client';
import { set } from '@auth0/nextjs-auth0/dist/session';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from 'react';

// Define the shape of the context
interface KeywordContextType {
  keywords: Array<{
    primary: string;
    secondary: string[];
  }>;
  activeKeywords: string[];
  setKeywords: Dispatch<
    SetStateAction<{ primary: string; secondary: string[] }[]>
  >;
  addActiveKeyword: (keyword: string) => void;
  removeActiveKeyword: (keyword: string) => void;
}

// Create the context
export const KeywordContext = createContext<KeywordContextType>({
  keywords: [],
  setKeywords: () => {},
  activeKeywords: [],
  addActiveKeyword: () => {}, // Fixed property name
  removeActiveKeyword: () => {}
});

// Create the provider component
const KeywordProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [keywords, setKeywords] = useState<
    Array<{
      primary: string;
      secondary: string[];
    }>
  >([]);
  const [activeKeywords, setActiveKeywords] = useState<string[]>([]);

  useEffect(() => {
    const sessionString = sessionStorage.getItem('progress') as string;
    const sessionData = JSON.parse(sessionString);

    if (sessionData.keywords) {
      setKeywords(sessionData.keywords);
      setActiveKeywords(['Joost']);
      console.log('Keywords:', sessionData.keywords);
    }
  }, []);

  const addActiveKeyword = React.useCallback(
    (keyword: string) => {
      setActiveKeywords([...activeKeywords, keyword]);
    },
    [activeKeywords]
  );

  const removeActiveKeyword = React.useCallback(
    (keyword: string) => {
      setActiveKeywords(activeKeywords.filter((k) => k !== keyword));
    },
    [activeKeywords]
  );

  const contextValue = React.useMemo(
    () => ({
      keywords,
      setKeywords,
      activeKeywords,
      addActiveKeyword,
      removeActiveKeyword
    }),
    [
      keywords,
      setKeywords,
      activeKeywords,
      addActiveKeyword,
      removeActiveKeyword
    ]
  );

  return (
    <KeywordContext.Provider value={contextValue}>
      {children}
    </KeywordContext.Provider>
  );
};

export default KeywordProvider;
