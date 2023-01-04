import { FunctionComponent } from 'react';
import NextLink from 'next/link';
import { LinkProps } from './Link.types';
import { linkStyles } from './Link.styles';
import { cx } from 'class-variance-authority';

export const Link: FunctionComponent<LinkProps> = ({
  href,
  children,
  underline,
  className,
  ...props
}) => {
  return (
    <NextLink
      className={cx(className, linkStyles({ underline }))}
      href={href}
      aria-label={props['aria-label'] ?? 'Learn more'}
      target={props.target}
    >
      {children}
    </NextLink>
  );
};
