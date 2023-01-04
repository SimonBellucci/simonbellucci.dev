import '../styles/globals.css';
import { Heading } from '@components/Typography';
import { ThemeProvider } from 'next-themes';
import { Gradient } from '@components/Utility/Gradient';
import { Header } from '@components/Navigation/Header';
import { CommandBar } from '@components/Action';
import { Inter } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const NotFound = () => {
  return (
    <main className={`${inter.variable} font-sans`}>
      <ThemeProvider attribute="class">
        <CommandBar>
          <Header />
          <div className="flex h-[calc(100vh-theme(spacing.20))] w-full items-center justify-center overflow-hidden">
            <div className="relative">
              <Heading as="h1" variant="display-3" className="mb-10">
                404
              </Heading>
              <Heading variant="display-5" className="mb-2">
                How did you end up here ? 🧐
              </Heading>
              <Gradient className="absolute -top-[300px] left-[80%] -z-10" />
            </div>
          </div>
        </CommandBar>
      </ThemeProvider>
    </main>
  );
};

export default NotFound;
