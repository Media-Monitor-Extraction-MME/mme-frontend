import './globals.scss';

export const metadata = {
  title: 'Peek Dashboard',
  description:
    'A dashboard displaying the sentiment analysis of a few user selected keywords.'
};

type LayoutProps = {
  children: React.ReactNode;
  auth: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body className="h-full" style={{ margin: 0 }}>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  );
}
