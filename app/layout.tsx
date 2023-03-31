import { ReactNode } from 'react';
import { Inter } from '@next/font/google';
import { Providers } from './providers';
import { Analytics } from './analytics';
import { Header } from '@components/Navigation/Header';
import { Footer } from '@components/Navigation/Footer';
import '../styles/globals.css';
import { getArticlesMetadata } from '@lib/article';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  icons: {
    icon: [
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/images/favicon/apple-touch-icon.png',
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const articles = getArticlesMetadata();

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Providers articles={articles}>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
