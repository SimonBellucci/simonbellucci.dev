'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { CommandBar } from '@components/Action';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <CommandBar>{children}</CommandBar>
    </ThemeProvider>
  );
};
