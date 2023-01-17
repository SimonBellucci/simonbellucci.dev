import { FunctionComponent } from 'react';
import Link from 'next/link';
import { cx } from 'class-variance-authority';
import { HeaderItemProps } from '@components/Navigation/Header/Item/Item.types';
import { headerItemStyles } from '@components/Navigation/Header/Item/Item.styles';

export const HeaderItem: FunctionComponent<HeaderItemProps> = ({
  href,
  children,
  disabled,
  className,
}) => {
  return (
    <li className={disabled ? cx(headerItemStyles({ disabled }), className) : ''}>
      {disabled ? (
        children
      ) : (
        <Link href={href} className={cx(headerItemStyles({ disabled }), className)}>
          {children}
        </Link>
      )}
    </li>
  );
};
