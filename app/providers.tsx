'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { CommandBar } from '@components/Action';
import { ArticleMetadata } from '@lib/article';

export const Providers = ({
  children,
  articles,
}: {
  children: ReactNode;
  articles: ArticleMetadata[];
}) => {
  return (
    <ThemeProvider attribute="class">
      <CommandBar articles={articles}>{children}</CommandBar>
    </ThemeProvider>
  );
};
