import React from 'react';
import BoardingHeader from '@/components/BoardingHeader'; // Import the BoardingHeader component
import './_styles/layout.scss';

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="landingpage">
      <BoardingHeader borderBottom={false} bgColor="white" />
      {children}
    </div>
  );
};

export default Layout;
