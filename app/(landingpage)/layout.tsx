import React from 'react';
import BoardingHeader from '@/components/BoardingHeader';
import './_styles/layout.scss';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="landingpage">
      <BoardingHeader borderBottom={false} bgColor="white" buttons={true} /> {/* Enable buttons */}
      {children}
    </div>
  );
};

export default Layout;
