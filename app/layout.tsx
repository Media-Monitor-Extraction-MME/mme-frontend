import './globals.scss';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import Toast from './toast';
import SideBar from './sidebar';
import { Suspense } from 'react';
import { Grid } from '@tremor/react';

export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <UserProvider>
        <body className="h-full">
          <Suspense>
            <Nav />
          </Suspense>
          <Grid numItems={5}>
            <div style={{ gridColumn: 'span 1' }}></div>
            <div style={{ gridColumn: 'span 4' }}>{children}</div>
          </Grid>
          {/* <Analytics />
          <Toast /> */}
        </body>
      </UserProvider>
    </html>
  );
}
