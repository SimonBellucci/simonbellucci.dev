import { BaseMetadata } from '@lib/seo/seo.types';

export interface ArticleMetadata extends BaseMetadata {
  date: string;
  updated: string;
  categories: string;
  slug: string;
  permalink: string;
}
