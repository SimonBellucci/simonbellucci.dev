import { cva } from 'class-variance-authority';
import { weight, center, color } from '@components/Typography/Typography.styles';

export const headingStyles = cva(
  'display font-semibold text-gray-800 dark:text-white !leading-snug transition-colors',
  {
    variants: {
      variant: {
        'display-1': 'display-1 text-4xl sm:text-5xl md:text-6xl',
        'display-2': 'display-2 text-3xl sm:text-4xl md:text-5xl',
        'display-3': 'display-3 text-2xl sm:text-3xl md:text-4xl',
        'display-4': 'display-4 text-xl sm:text-2xl md:text-3xl',
        'display-5': 'display-5 text-xl sm:text-xl md:text-2xl',
        headline: 'headline text-sm uppercase tracking-[0.02em]',
      },
      weight,
      center,
      color,
      accent: {
        true: 'text-accent',
      },
    },
    defaultVariants: {
      variant: 'display-1',
      weight: 400,
    },
  },
);
