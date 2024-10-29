import type { Metadata } from 'next';

import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { css } from '../../styled-system/css';

const stylesBody = css({
  maxWidth: '1280px',
  margin: '0 auto',
});

export const metadata: Metadata = {
  title: 'CAD Exchanger Test',
  description: 'Fun test for frontend developer vacancy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={stylesBody}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
