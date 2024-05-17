import React from 'react';
import BoardingHeader from './_components/BoardingHeader';
import '@/onboarding/_styles/layout.scss';

export const metadata = {
  title: 'Peek Dashboard',
  description:
    'A dashboard displaying the sentiment analysis of a few user selected keywords.'
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <BoardingHeader />
      <div className="onboarding-holder">{children}</div>
    </>
  );
};

export default Layout;
