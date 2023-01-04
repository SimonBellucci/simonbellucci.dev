import { FunctionComponent } from 'react';
import { BreakpointProps, GridColProps } from '@components/Layout/Grid';
import { cx } from 'class-variance-authority';
import { gridColStyles } from '@components/Layout/Grid';

export const GridCol: FunctionComponent<GridColProps> = ({
  children,
  className,
  xs = 12,
  md,
  lg,
  xl,
  ...props
}) => {
  const generatePropsStyle = (breakpoints: BreakpointProps) => {
    let generatedProps: { [key: string]: string | number } = {};
    Object.keys(breakpoints).map(breakpoint => {
      const value = breakpoints[breakpoint as keyof BreakpointProps];
      if (typeof value === 'number') {
        generatedProps[`${breakpoint}`] = value;
      } else {
        if (value?.start) {
          generatedProps[`${breakpoint}Start`] = value.start;
        }
        if (value?.end) {
          generatedProps[`${breakpoint}End`] = value.end;
        }
      }
    });
    return generatedProps;
  };

  return (
    <div className={cx(gridColStyles(generatePropsStyle({ xs, md, lg, xl })), className)}>
      {children}
    </div>
  );
};
