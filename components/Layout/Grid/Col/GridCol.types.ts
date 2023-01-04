import { ComponentProps } from 'react';

export type GridValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridBreakpoints = GridValues | { start: GridValues; end: GridValues | 13 };

export interface BreakpointProps {
  xs?: GridBreakpoints;
  md?: GridBreakpoints;
  lg?: GridBreakpoints;
  xl?: GridBreakpoints;
}

export interface GridColProps extends ComponentProps<'div'>, BreakpointProps {
  as?: keyof JSX.IntrinsicElements;
}
