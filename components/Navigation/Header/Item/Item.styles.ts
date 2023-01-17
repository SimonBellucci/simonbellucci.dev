import { cva } from 'class-variance-authority';

export const headerItemStyles = cva('flex items-center gap-2 text-base', {
  variants: {
    disabled: {
      true: 'cursor-not-allowed text-gray-500',
      false: [
        'cursor-pointer text-gray-800 transition-colors',
        'dark:text-white',
        'hover:text-gray-500 dark:hover:text-gray-400',
      ],
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
