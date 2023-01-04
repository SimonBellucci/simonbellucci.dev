import { cva } from 'class-variance-authority';

export const gridContainerStyles = cva('grid grid-cols-12', {
  variants: {
    gapCol: {
      0: '',
      24: 'gap-x-4 md:gap-x-6',
      32: 'gap-x-4 md:gap-x-6 lg:gap-x-8',
    },
    gapRow: {
      0: '',
      4: 'gap-y-1',
      8: 'gap-y-2',
      24: 'gap-y-6',
      32: 'gap-y-8',
      40: 'gap-y-10',
      64: 'gap-y-16',
    },
  },
  defaultVariants: {
    gapCol: 24,
    gapRow: 24,
  },
});
