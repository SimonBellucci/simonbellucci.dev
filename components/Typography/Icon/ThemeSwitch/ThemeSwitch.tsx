import { FunctionComponent, useEffect, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { useTheme } from 'next-themes';

const MoonIcon: FunctionComponent<{ duration?: number }> = ({ duration = 0.5 }) => {
  return (
    <m.svg
      key="moon"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <m.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        initial={{
          opacity: 0,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        exit={{
          opacity: 0,
          pathLength: 0,
        }}
        transition={{
          duration,
          ease: 'easeInOut',
        }}
      />
    </m.svg>
  );
};

const SunIcon: FunctionComponent<{ duration?: number }> = ({ duration = 0.5 }) => {
  return (
    <m.svg
      key="sun"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <m.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        exit={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        transition={{
          duration,
          ease: 'easeInOut',
        }}
      />
    </m.svg>
  );
};

export const ThemeSwitchIcon: FunctionComponent = () => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<typeof resolvedTheme>();

  /**
   * Workaround waiting for Next Themes to properly handle Next13 appDir
   * @see https://github.com/pacocoursey/next-themes/issues/152
   */
  useEffect(() => {
    setTheme(resolvedTheme);
  }, [resolvedTheme]);

  return <AnimatePresence>{theme === 'dark' ? <MoonIcon /> : <SunIcon />}</AnimatePresence>;
};
