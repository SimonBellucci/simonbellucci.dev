import { ComponentProps } from 'react';

export interface ArticlesProps extends ComponentProps<'div'> {
  data: {
    title: string;
    introduction: string;
  };
}
