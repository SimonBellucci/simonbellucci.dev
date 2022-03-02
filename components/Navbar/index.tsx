import { FunctionComponent, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useKBar } from 'kbar';
import classNames from 'classnames';
import { SunIcon, MoonIcon } from '../Icon/ThemeSwitch';
import Logo from '../Logo';
import NavbarItem from './Item';
import Button from '../Button';
import { usePlatform } from '../../hooks/usePlatform';

type NavbarProps = {
  className?: string;
};

type ThemeIcon = 'sun' | 'moon';

const Navbar: FunctionComponent<NavbarProps> = ({ className }) => {
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
      className={classNames(
        'z-20 border-gray-800/10 bg-white/80',
        'supports-backdrop-blur:bg-white/30 supports-backdrop-blur:backdrop-blur',
        'dark:border-white/10 dark:bg-gray-800/80 supports-backdrop-blur:dark:bg-gray-800/30',
        'lg:sticky lg:left-0 lg:top-0 lg:border-b',
        'max-lg:fixed max-lg:bottom-0 max-lg:w-full max-lg:border-t',
        className,
      )}
    >
      <div className="container relative z-10">
        <nav className="flex items-center justify-between py-2 lg:py-4">
          <Logo />
          <ul className="flex space-x-4 self-center lg:space-x-12">
            <NavbarItem href="/about" title="About" />
            <NavbarItem href="/articles" title="Articles" />
            <NavbarItem href="/tools" title="Tools" />
          </ul>
          <div className="flex items-center space-x-4">
            <Button
              type="control"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="min-h-[42px] min-w-[42px]"
            >
              <AnimatePresence>
                {resolvedTheme === 'dark' && icon === 'moon' ? (
                  <SunIcon duration={transitionDuration} />
                ) : (
                  resolvedTheme === 'light' &&
                  icon === 'sun' && <MoonIcon duration={transitionDuration} />
                )}
              </AnimatePresence>
            </Button>
            <Button type="control" className="hidden lg:flex" onClick={query.toggle}>
              {isMac ? 'CMD + K' : 'CTRL + K'}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
