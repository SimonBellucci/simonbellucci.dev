import { ElementType, FunctionComponent } from 'react';
import { cx } from 'class-variance-authority';
import { IconProps } from '@components/Typography';
import { iconStyles } from '@components/Typography';

export const Icon: FunctionComponent<IconProps> = ({ icon, size, color, className, ...props }) => {
  const Icon = icon as ElementType;

  return <Icon className={cx(iconStyles({ size, color }), className)} {...props} />;
};
