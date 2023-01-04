import { FunctionComponent } from 'react';
import Link from 'next/link';
import { cx } from 'class-variance-authority';
import { ButtonProps } from '@components/Action/Button';
import { buttonStyles } from '@components/Action/Button';
import { Icon } from '@components/Typography';
import { IconSpinner } from '@components/Typography';

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant,
  size,
  icon,
  iconSide,
  href,
  disabled,
  loading,
  className,
  ...props
}) => {
  const isLink = typeof href !== 'undefined';
  const classNames = cx(
    buttonStyles({
      variant,
      size,
      iconSide,
      disabled: disabled || loading,
      loading,
    }),
    className,
  );

  const content = (
    <>
      {children}
      {icon && !loading ? <Icon icon={icon} /> : null}
      {loading ? <IconSpinner className="animate-spin" /> : null}
    </>
  );

  if (isLink && !(disabled || loading)) {
    return (
      <Link
        className={classNames}
        href={href}
        aria-label={props['aria-label'] ?? (children as string)}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={classNames}
      aria-label={props['aria-label'] ?? (children as string)}
      {...props}
    >
      {content}
    </button>
  );
};
