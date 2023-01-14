import { ComponentProps, FunctionComponent } from 'react';
import { cx } from 'class-variance-authority';

export const ButtonControl: FunctionComponent<ComponentProps<'button'>> = ({
  children,
  className,
  ...props
}) => {
  const classes = [
    'min-h-[42px] rounded-[8px] inline-flex items-center border border-gray-300 bg-gray-100 p-2 text-sm text-gray-500 shadow-transparent transition-all duration-300',
    'hover:border-rose-400 hover:text-rose-400 hover:shadow-hover hover:shadow-rose-400',
    'dark:border-gray-600 dark:bg-gray-700 dark:text-white',
    'dark:hover:border-sky-600 dark:hover:text-sky-500 dark:hover:shadow-sky-500',
  ];

  return (
    <button className={cx(classes, className)} {...props} aria-label="Control">
      {children}
    </button>
  );
};
