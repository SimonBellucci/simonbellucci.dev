'use client';

import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Action } from 'kbar';
import {
  ArrowRightIcon,
  ComputerDesktopIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { Icon, IconGithub, IconLinkedin, IconTwitter } from '@components/Typography';
import { useSocial } from '@hooks/useSocial';
import { ArticleMetadata } from '@lib/article';

export const useAction = (articles: ArticleMetadata[]) => {
  const router = useRouter();
  const { setTheme } = useTheme();
  const { socials } = useSocial();

  const generalActions: Action[] = [
    {
      id: 'copy',
      name: 'Copy URL',
      shortcut: ['u'],
      keywords: 'copy current url',
      section: 'General',
      icon: <Icon icon={DocumentDuplicateIcon} size="md" />,
      perform: () => navigator.clipboard.writeText(window.location.href),
    },
    {
      id: 'email',
      name: 'Send Email',
      shortcut: ['e'],
      keywords: 'send email',
      section: 'General',
      icon: <Icon icon={EnvelopeIcon} size="md" />,
      perform: () => window.open(`mailto:${socials.mail}`, '_blank'),
    },
  ];

  const navigationActions: Action[] = [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['n', 'h'],
      keywords: 'homepage',
      section: 'Navigation',
      icon: <Icon icon={ArrowRightIcon} size="md" />,
      perform: () => router.push('/'),
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['n', 'a'],
      keywords: 'about me',
      section: 'Navigation',
      icon: <Icon icon={ArrowRightIcon} size="md" />,
      perform: () => router.push('/about'),
    },
    {
      id: 'articles',
      name: 'Articles',
      shortcut: ['n', 'r'],
      keywords: 'writing words',
      section: 'Navigation',
      icon: <Icon icon={ArrowRightIcon} size="md" />,
      perform: () => router.push('/articles'),
    },
    {
      id: 'tools',
      name: 'Tools',
      shortcut: ['n', 't'],
      keywords: 'some tools',
      section: 'Navigation',
      icon: <Icon icon={ArrowRightIcon} size="md" />,
      perform: () => router.push('/tools'),
    },
  ];

  const articleAction: Action[] = [
    {
      id: 'articles-list',
      name: 'Search articles...',
      shortcut: ['b'],
      keywords: 'search articles',
      section: 'Articles',
    },
    ...(articles
      ? articles.map(article => {
          return {
            id: article.slug,
            name: article.title,
            keywords: 'search articles',
            section: 'Articles',
            parent: 'articles-list',
            perform: () => router.push(article.permalink),
          };
        })
      : []),
  ];

  const themeActions: Action[] = [
    {
      id: 'light',
      name: 'Light',
      shortcut: ['t', 'l'],
      keywords: 'theme switch to light',
      section: 'Theme',
      icon: <Icon icon={SunIcon} size="md" />,
      perform: () => setTheme('light'),
    },
    {
      id: 'dark',
      name: 'Dark',
      shortcut: ['t', 'd'],
      keywords: 'theme switch to dark',
      section: 'Theme',
      icon: <Icon icon={MoonIcon} size="md" />,
      perform: () => setTheme('dark'),
    },
    {
      id: 'system',
      name: 'System',
      shortcut: ['t', 's'],
      keywords: 'theme switch to system',
      section: 'Theme',
      icon: <Icon icon={ComputerDesktopIcon} size="md" />,
      perform: () => setTheme('system'),
    },
  ];

  const socialActions: Action[] = [
    {
      id: 'github',
      name: 'Github',
      shortcut: ['f', 'g'],
      keywords: 'follow github',
      section: 'Follow',
      icon: <IconGithub className="h-4 w-4" />,
      perform: () => window.open(socials.github, '_blank'),
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['f', 'l'],
      keywords: 'follow linkedin',
      section: 'Follow',
      icon: <IconLinkedin className="h-4 w-4" />,
      perform: () => window.open(socials.linkedin, '_blank'),
    },
    {
      id: 'twitter',
      name: 'Twitter',
      shortcut: ['f', 't'],
      keywords: 'follow twitter',
      section: 'Follow',
      icon: <IconTwitter className="h-4 w-4" />,
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
