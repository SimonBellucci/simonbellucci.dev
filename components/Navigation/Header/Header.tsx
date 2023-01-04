import { ComponentProps, FunctionComponent, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useKBar } from 'kbar';
import { IconSun, IconMoon } from '@components/Typography/Icon';
import { Logo } from '@components/Utility/Logo';
import { ButtonControl } from '@components/Action';
import { usePlatform } from '@hooks/usePlatform';
import { cx } from 'class-variance-authority';
import { HeaderItem } from '@components/Navigation/Header';
import { Container } from '@components/Layout';

type ThemeIcon = 'sun' | 'moon';

export const Header: FunctionComponent<ComponentProps<'header'>> = ({ className }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const { query } = useKBar();
  const { isMac } = usePlatform();

  const [mounted, setMounted] = useState(false);
  const [icon, setIcon] = useState<ThemeIcon>(resolvedTheme === 'dark' ? 'moon' : 'sun');

  const transitionDuration = 0.25;

  useEffect(() => {
    let updateIcon: NodeJS.Timeout;

    if (mounted) {
      updateIcon = setTimeout(() => {
        if (icon === 'moon' && resolvedTheme === 'light') return setIcon('sun');
        if (icon === 'sun' && resolvedTheme === 'dark') return setIcon('moon');
      }, transitionDuration * 1000 + 50);
    }

    setMounted(true);

    return () => {
      updateIcon && clearTimeout(updateIcon);
    };
  }, [resolvedTheme]);

  if (!mounted) return null;

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
            <HeaderItem href="/about">About</HeaderItem>
            <HeaderItem href="/articles">Articles</HeaderItem>
            <HeaderItem href="/tools">Tools</HeaderItem>
          </ul>
          <div className="flex items-center space-x-4">
            <ButtonControl
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="min-h-[42px] min-w-[42px]"
            >
              <AnimatePresence>
                {resolvedTheme === 'dark' && icon === 'moon' ? (
                  <IconSun duration={transitionDuration} />
                ) : (
                  resolvedTheme === 'light' &&
                  icon === 'sun' && <IconMoon duration={transitionDuration} />
                )}
              </AnimatePresence>
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
