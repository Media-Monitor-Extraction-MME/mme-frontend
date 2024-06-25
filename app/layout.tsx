import './globals.scss';

export const metadata = {
  title: 'Peek Dashboard',
  description:
    'A dashboard displaying the sentiment analysis of a few user selected keywords.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full" style={{ margin: 0 }}>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  );
}
