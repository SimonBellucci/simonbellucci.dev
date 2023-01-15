'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { CommandBar } from '@components/Action';
import { ArticleMetadata } from '@lib/article';
import { domAnimation, LazyMotion } from 'framer-motion';

export const Providers = ({
  children,
  articles,
}: {
  children: ReactNode;
  articles: ArticleMetadata[];
}) => {
  return (
    <ThemeProvider attribute="class">
      <LazyMotion features={domAnimation}>
        <CommandBar articles={articles}>{children}</CommandBar>
      </LazyMotion>
    </ThemeProvider>
  );
};
