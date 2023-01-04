import {
  ComponentProps,
  ComponentPropsWithoutRef,
  forwardRef,
  FunctionComponent,
} from 'react';
import { cx } from 'class-variance-authority';

export const Container = forwardRef<HTMLInputElement, ComponentProps<'div'>>(
  function Container({ children, className, ...props }, ref) {
    return (
      <div className={cx('container', className)} {...props} ref={ref}>
        {children}
      </div>
    );
  },
);
