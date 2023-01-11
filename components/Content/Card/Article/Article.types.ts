import { ComponentProps } from 'react';
import { ArticleMetadata } from '@lib/article';

export interface CardArticleProps extends ComponentProps<'div'> {
  article: ArticleMetadata;
}
