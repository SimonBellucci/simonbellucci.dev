import { FunctionComponent, PropsWithoutRef, ReactNode } from 'react';
import { HeroHome } from '@patterns/Hero/Home';
import { ListArticle } from '@patterns/List/Article';

export type PatternComponent<T, P = {}> = FunctionComponent<PropsWithoutRef<P>> & {
  HeroHome: typeof HeroHome;
  ListArticle: typeof ListArticle;
};

export interface PatternProps {
  children?: ReactNode;
}
