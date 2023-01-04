import { FunctionComponent } from 'react';
import { IconProps } from '@components/Typography';
import { cx } from 'class-variance-authority';

export const IconTwitter: FunctionComponent<Omit<IconProps, 'icon'>> = ({
  className,
  height,
  width,
}) => (
  <svg
    width={width ?? 22}
    height={height ?? 18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${width ?? 22} ${height ?? 18}`}
    className={cx(
      'text-gray-800 shadow-transparent transition-colors hover:text-gray-500 dark:text-white dark:hover:text-gray-400',
      className,
    )}
  >
    <path
      d="M22 2.13c-.81.362-1.68.606-2.592.716A4.552 4.552 0 0 0 21.392.332a9.003 9.003 0 0 1-2.866 1.103A4.494 4.494 0 0 0 15.232 0c-2.493 0-4.514 2.035-4.514 4.544 0 .356.04.703.117 1.036C7.083 5.39 3.758 3.58 1.532.832A4.546 4.546 0 0 0 .92 3.116 4.55 4.55 0 0 0 2.928 6.9 4.473 4.473 0 0 1 .884 6.33v.057a4.54 4.54 0 0 0 3.62 4.456 4.49 4.49 0 0 1-2.038.078 4.522 4.522 0 0 0 4.216 3.156A9.018 9.018 0 0 1 0 15.959 12.713 12.713 0 0 0 6.919 18C15.22 18 19.76 11.076 19.76 5.071c0-.197-.005-.393-.013-.588A9.208 9.208 0 0 0 22 2.131Z"
      fill="currentColor"
    />
  </svg>
);
