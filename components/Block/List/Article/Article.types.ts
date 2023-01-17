import { ComponentProps } from 'react';
import { HeadingProps } from '@components/Typography';

export interface ListArticleProps extends ComponentProps<'div'> {
  data: {
    title: {
      content: string;
      as: HeadingProps['as'];
    };
    introduction: string;
  };
  limit?: number;
}
