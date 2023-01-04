import { ReactNode } from 'react';
import { Inter } from '@next/font/google';
import { Providers } from './providers';
import { Analytics } from './analytics';
import { Header } from '@components/Navigation/Header';
import { Footer } from '@components/Navigation/Footer';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Providers>
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
