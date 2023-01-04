import { cva } from 'class-variance-authority';
import { color } from '@components/Typography/Typography.styles';

export const iconStyles = cva('', {
  variants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      base: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-7 w-7',
    },
    color,
  },
  defaultVariants: {
    size: 'base',
  },
});
