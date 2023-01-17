import { FunctionComponent } from 'react';
import { TagProps, tagStyles } from '@components/Indicator';
import { cx } from 'class-variance-authority';

export const Tag: FunctionComponent<TagProps> = ({ children, className, variant, size }) => {
  return <div className={cx(tagStyles({ variant, size }), className)}>{children}</div>;
};
