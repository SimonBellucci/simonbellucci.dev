import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  [
    'relative text-base font-medium transition-all duration-300 inline-flex items-center w-fit h-fit gap-2',
  ],
  {
    variants: {
      variant: {
        primary: 'rounded-xl',
        secondary: 'rounded-xl border',
        tertiary: 'tertiary',
      },
      size: {
        sm: 'text-sm [&:not(.tertiary)]:py-2 [&:not(.tertiary)]:px-4',
        md: 'text-base [&:not(.tertiary)]:py-2 [&:not(.tertiary)]:px-5',
        lg: 'text-lg [&:not(.tertiary)]:py-2 [&:not(.tertiary)]:px-6',
      },
      iconSide: {
        left: 'flex-row-reverse',
        right: '',
      },
      disabled: {
        true: 'disabled cursor-not-allowed',
      },
      loading: {
        true: 'cursor-wait',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        disabled: true,
        className: ['bg-gray-200 text-gray-500', 'dark:bg-gray-300 dark:text-gray-600'],
      },
      {
        variant: 'primary',
        disabled: false,
        className: [
          'bg-gray-800 text-white shadow-transparent',
          'hover:shadow-hover hover:shadow-rose-400',
          'dark:bg-white dark:text-gray-800',
          'dark:hover:shadow-sky-500',
        ],
      },
      {
        variant: 'secondary',
        disabled: true,
        className: 'border-gray-400 text-gray-400',
      },
      {
        variant: 'secondary',
        disabled: false,
        className: [
          'border-rose-400 text-rose-400 bg-transparent',
          'hover:border-transparent hover:bg-rose-400 hover:text-white',
          'dark:border-sky-500 dark:text-sky-500',
          'dark:hover:border-transparent dark:hover:text-white dark:hover:bg-sky-500',
        ],
      },
      {
        variant: 'tertiary',
        disabled: true,
        className: 'text-gray-400',
      },
      {
        variant: 'tertiary',
        disabled: false,
        className: ['hover:text-rose-400', 'dark:text-white', 'dark:hover:text-sky-400'],
      },
      {
        disabled: false,
        loading: false,
        className: 'cursor-pointer',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false,
      loading: false,
    },
  },
);
