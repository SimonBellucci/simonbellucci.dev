import { cva } from 'class-variance-authority';

export const tagStyles = cva('w-fit rounded-full', {
  variants: {
    variant: {
      neutral: 'bg-gray-400 text-white',
      primary: 'bg-sky-500 text-white',
      secondary: 'bg-green-500 text-white',
      danger: 'bg-red-500 text-white',
    },
    size: {
      sm: 'text-xs px-1',
      md: 'text-sm px-3 py-1',
      lg: 'text-md px-4 py-1',
    },
  },
  defaultVariants: {
    variant: 'neutral',
    size: 'md',
  },
});
