import matter from 'gray-matter';

export interface HeroArticleProps {
  data: {
    content: matter.GrayMatterFile<string>['content'];
    meta: matter.GrayMatterFile<string>['data'];
  };
}
