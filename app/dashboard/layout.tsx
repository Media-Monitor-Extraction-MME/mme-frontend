import '@/globals.scss';
import { Suspense } from 'react';
import { DropDownButton } from '@/components/DropDownButton';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import ShareSvg from '@/components/ShareSvg';
import Tabs from './_components/Tabs';
import CustomDropdown from './_components/CustomDropdown';
import Providers from './_providers/Providers';
import Keywords from './_components/Keywords';

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
  return (
    <Providers>
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
          <Keywords />
          <div className="flex justify-between w-100 bg-gray-50 p-4">
            <Tabs tabs={['Overall', 'X (Twitter)', 'Reddit']} />
            <CustomDropdown
              options={[
                { label: 'Last 7 days', value: '#' },
                { label: 'Last 30 days', value: '#' },
                { label: 'Last 90 days', value: '#' },
                { label: 'Last 180 days', value: '#' },
                { label: 'Last 365 days', value: '#' }
              ]}
            />
          </div>
          {navigation}
        </div>
      </div>
    </Providers>
  );
}
