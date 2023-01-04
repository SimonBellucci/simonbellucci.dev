import { cva } from 'class-variance-authority';

export const sectionStyles = cva('', {
  variants: {
    py: {
      none: '',
      small: 'py-10 md:py-16',
    },
  },
  defaultVariants: {
    py: 'small',
  },
});
