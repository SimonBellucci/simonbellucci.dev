import { FunctionComponent } from 'react';
import { gridContainerStyles, GridContainerProps } from '@components/Layout/Grid';
import { cx } from 'class-variance-authority';

export const GridContainer: FunctionComponent<GridContainerProps> = ({
  gapCol,
  gapRow,
  children,
  className,
}) => {
  return <div className={cx(gridContainerStyles({ gapCol, gapRow }), className)}>{children}</div>;
};
