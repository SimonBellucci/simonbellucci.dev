import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { Action } from 'kbar';
import {
  ArrowRightIcon,
  DesktopComputerIcon,
  DuplicateIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/outline';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/Icon/Social';
import { useSocials } from './useSocials';

type generalActionType = Action & {
  section: 'General';
};

type navigationActionType = Action & {
  section: 'Navigation';
};

type articleActionType = Action & {
  section: 'Articles';
};

type themeActionType = Action & {
  section: 'Theme';
};

type socialActionType = Action & {
  section: 'Follow';
};

export const useActions = () => {
  const router = useRouter();
  const { setTheme } = useTheme();
  const { socials } = useSocials();

  const generalActions: generalActionType[] = [
    {
      id: 'copy',
      name: 'Copy URL',
      shortcut: ['u'],
      keywords: 'copy current url',
      section: 'General',
      icon: DuplicateIcon,
      perform: () => navigator.clipboard.writeText(window.location.href),
    },
    {
      id: 'email',
      name: 'Send Email',
      shortcut: ['e'],
      keywords: 'send email',
      section: 'General',
      icon: MailIcon,
      perform: () => window.open(`mailto:${socials.mail}`, '_blank'),
    },
  ];

  const navigationActions: navigationActionType[] = [
    {
      id: 'about',
      name: 'About',
      shortcut: ['n', 'a'],
      keywords: 'about me',
      section: 'Navigation',
      icon: ArrowRightIcon,
      perform: () => router.push('/about'),
    },
    {
      id: 'articles',
      name: 'Articles',
      shortcut: ['n', 'r'],
      keywords: 'writing words',
      section: 'Navigation',
      icon: ArrowRightIcon,
      perform: () => router.push('/articles'),
    },
    {
      id: 'tools',
      name: 'Tools',
      shortcut: ['n', 't'],
      keywords: 'some tools',
      section: 'Navigation',
      icon: ArrowRightIcon,
      perform: () => router.push('/tools'),
    },
  ];

  const articleAction: articleActionType[] = [
    {
      id: 'articles-list',
      name: 'Search articles...',
      shortcut: ['b'],
      keywords: 'search articles',
      section: 'Articles',
    },
    {
      id: 'fake',
      name: 'Fake article',
      keywords: 'search articles',
      section: 'Articles',
      parent: 'articles-list',
      perform: () => router.push('/articles/fake'),
    },
  ];

  const themeActions: themeActionType[] = [
    {
      id: 'light',
      name: 'Light',
      shortcut: ['t', 'l'],
      keywords: 'theme switch to light',
      section: 'Theme',
      icon: SunIcon,
      perform: () => setTheme('light'),
    },
    {
      id: 'dark',
      name: 'Dark',
      shortcut: ['t', 'd'],
      keywords: 'theme switch to dark',
      section: 'Theme',
      icon: MoonIcon,
      perform: () => setTheme('dark'),
    },
    {
      id: 'system',
      name: 'System',
      shortcut: ['t', 's'],
      keywords: 'theme switch to system',
      section: 'Theme',
      icon: DesktopComputerIcon,
      perform: () => setTheme('system'),
    },
  ];

  const socialActions: socialActionType[] = [
    {
      id: 'github',
      name: 'Github',
      shortcut: ['f', 'g'],
      keywords: 'follow github',
      section: 'Follow',
      icon: GithubIcon,
      perform: () => window.open(socials.github, '_blank'),
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['f', 'l'],
      keywords: 'follow linkedin',
      section: 'Follow',
      icon: LinkedinIcon,
      perform: () => window.open(socials.linkedin, '_blank'),
    },
    {
      id: 'twitter',
      name: 'Twitter',
      shortcut: ['f', 't'],
      keywords: 'follow twitter',
      section: 'Follow',
      icon: TwitterIcon,
      perform: () => window.open(socials.twitter, '_blank'),
    },
  ];

  return {
    actions: [
      ...generalActions,
      ...navigationActions,
      ...articleAction,
      ...themeActions,
      ...socialActions,
    ],
  };
};
