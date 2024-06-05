import React from 'react';
import Script from 'next/script';
// import staticScript from '@/embed-test/static/shell-c7aa92cc.js';

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div>
      {/* <Script
        src={'http://localhost:3000/reddit/shell-c7aa92cc.js'}
        type="module"
        strategy="lazyOnload"
      /> */}
      {/* <script src={staticScript} defer></script> */}
      {/* Add your main content component here */}
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
