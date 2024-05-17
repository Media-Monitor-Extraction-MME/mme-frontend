import '@/globals.scss';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Suspense } from 'react';
import Sidebar from '@/sidebar';
import { DropDownButton } from '@/components/DropDownButton';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import ShareSvg from '@/components/ShareSvg';

export const metadata = {
  title: 'Peek Dashboard',
  description:
    'A dashboard displaying the sentiment analysis of a few user selected keywords.'
};

export default function RootLayout({
  children,
  navigation,
  sidebar
}: Readonly<{
  children: React.ReactNode;
  navigation: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  console.log(sidebar);
  return (
    <UserProvider>
      <div className="flex">
        <div>
          <Suspense>{sidebar}</Suspense>
        </div>
        <div className="w-full">
          <div className="page-title">
            <h1 className="h4">Keyword Analysis</h1>
            <DropDownButton
              contentIcon={<ShareSvg />}
              icon={<ChevronDownIcon aria-hidden="true" />}
              content="Export"
              classes={{
                button1: 'px-3 py-3',
                button2: 'px-3 py-3'
              }}
              menu={[{ item: 'PDF', href: '#' }]}
            />
          </div>
          {navigation}
        </div>
      </div>
    </UserProvider>
  );
}
