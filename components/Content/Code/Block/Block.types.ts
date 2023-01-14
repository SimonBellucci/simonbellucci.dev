import { ComponentProps, ReactNode } from 'react';
import { Language } from 'prism-react-renderer';

export interface CodeBlockProps extends ComponentProps<'pre'> {}

export interface PreProps {
  children: {
    props?: {
      children?: string;
      className?: `language-${Language}`;
      mdxType?: keyof HTMLElementTagNameMap;
      originalType?: string;
      parentName?: string;
    };
  };
}
