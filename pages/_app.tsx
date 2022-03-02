import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import CommandBar from '../components/Command/Bar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <CommandBar>
        <Component {...pageProps} />
      </CommandBar>
    </ThemeProvider>
  );
}

export default MyApp;
