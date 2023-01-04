import { FunctionComponent } from 'react';
import { cx } from 'class-variance-authority';
import { iconStyles } from '@components/Typography';
import { IconProps } from '@components/Typography';

export const IconSpinner: FunctionComponent<Omit<IconProps, 'icon'>> = ({
  size,
  color,
  className,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={cx(iconStyles({ size, color }), className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};
