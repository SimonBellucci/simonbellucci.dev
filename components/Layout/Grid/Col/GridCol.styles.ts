import { cva } from 'class-variance-authority';

type BreakpointType = 'xs' | 'md' | 'lg' | 'xl';

const breakpoints: BreakpointType[] = ['xs', 'md', 'lg', 'xl'];

interface GridClass {
  breakpoint?: BreakpointType;
  prefix?: 'span' | 'start' | 'end';
}

const generateClass = ({ breakpoint, prefix = 'span' }: GridClass) => {
  return Object.fromEntries(
    Array.from(Array(String(prefix) === 'end' ? 13 : 12).keys()).map(el => {
      let n = breakpoint && String(breakpoint) !== 'xs' ? `${breakpoint}:` : '';
      n += `col-${prefix}-${el + 1}`;
      return [el + 1, n];
    }),
  );
};

let variants: any = {};

breakpoints.forEach(breakpoint => {
  variants[breakpoint] = generateClass({
    breakpoint: breakpoint,
    prefix: 'span',
  });
  variants[`${breakpoint}Start`] = generateClass({
    breakpoint: breakpoint,
    prefix: 'start',
  });
  variants[`${breakpoint}End`] = generateClass({
    breakpoint: breakpoint,
    prefix: 'end',
  });
});

export const gridColStyles = cva('', {
  variants: variants,
  defaultVariants: {},
});
