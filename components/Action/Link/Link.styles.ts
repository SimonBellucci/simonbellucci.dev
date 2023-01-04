import { cva } from 'class-variance-authority';
import { color } from '@components/Typography';

export const linkStyles = cva(
  'transition-colors hover:text-gray-600 dark:hover:text-white dark:text-gray-300',
  {
    variants: {
      underline: {
        true: 'underline',
        false: '',
      },
      color,
    },
    defaultVariants: {
      underline: true,
      color: 'black',
    },
  },
);
