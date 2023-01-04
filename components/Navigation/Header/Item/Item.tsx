import { ComponentProps, FunctionComponent } from 'react';
import Link, { LinkProps } from 'next/link';
import { cx } from 'class-variance-authority';

export const HeaderItem: FunctionComponent<LinkProps & ComponentProps<'a'>> = ({
  href,
  children,
  className,
}) => {
  return (
    <li>
      <Link
        href={href}
        className={cx(
          'cursor-pointer text-base text-gray-800 transition-colors hover:text-gray-500 dark:text-white dark:hover:text-gray-400',
          className,
        )}
      >
        {children}
      </Link>
    </li>
  );
};
