import { ComponentProps } from 'react';
import { ArticleMetadata } from '@lib/article';

export interface CommandBarProps extends ComponentProps<'div'> {
  articles: ArticleMetadata[];
}
