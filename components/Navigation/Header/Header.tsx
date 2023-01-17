import { ComponentProps, FunctionComponent } from 'react';
import { useTheme } from 'next-themes';
import { useKBar } from 'kbar';
import { Logo } from '@components/Utility/Logo';
import { ButtonControl } from '@components/Action';
import { usePlatform } from '@hooks/usePlatform';
import { cx } from 'class-variance-authority';
import { HeaderItem } from '@components/Navigation/Header';
import { Container } from '@components/Layout';
import { ThemeSwitchIcon } from '@components/Typography/Icon/ThemeSwitch/ThemeSwitch';
import { Tag } from '@components/Indicator';

export const Header: FunctionComponent<ComponentProps<'header'>> = ({ className }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const { query } = useKBar();
  const { isMac } = usePlatform();

  return (
    <header
      className={cx(
        'z-20 border-gray-800/10 bg-white/80',
        'supports-backdrop-blur:bg-white/30 supports-backdrop-blur:backdrop-blur',
        'dark:border-white/10 dark:bg-gray-800/80 supports-backdrop-blur:dark:bg-gray-800/30',
        'lg:sticky lg:left-0 lg:top-0 lg:border-b',
        'max-lg:fixed max-lg:bottom-0 max-lg:w-full max-lg:border-t',
        className,
      )}
    >
      <Container className="relative z-10">
        <nav className="flex items-center justify-between py-2 lg:py-4">
          <Logo />
          <ul className="flex space-x-4 self-center lg:space-x-12">
            <HeaderItem href="/about" disabled>
              About{' '}
              <Tag size="sm" variant="primary" className="hidden sm:block">
                soon
              </Tag>
            </HeaderItem>
            <HeaderItem href="/articles">Articles</HeaderItem>
            <HeaderItem href="/tools" disabled>
              Tools
              <Tag size="sm" variant="primary" className="hidden sm:block">
                soon
              </Tag>
            </HeaderItem>
          </ul>
          <div className="flex items-center space-x-4">
            <ButtonControl
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="min-h-[42px] min-w-[42px]"
            >
              <ThemeSwitchIcon />
            </ButtonControl>
            <ButtonControl className="hidden lg:flex" onClick={query.toggle}>
              {isMac ? 'CMD + K' : 'CTRL + K'}
            </ButtonControl>
          </div>
        </nav>
      </Container>
    </header>
  );
};
