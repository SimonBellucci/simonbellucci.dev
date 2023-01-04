import { ComponentProps } from 'react';
import { VariantProps } from 'class-variance-authority';
import { gridContainerStyles } from '@components/Layout/Grid';

export interface GridContainerProps
  extends ComponentProps<'div'>,
    VariantProps<typeof gridContainerStyles> {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}
