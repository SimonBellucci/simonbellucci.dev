import { FunctionComponent } from 'react';
import { IconProps } from '@components/Typography';
import { cx } from 'class-variance-authority';

export const IconLinkedin: FunctionComponent<Omit<IconProps, 'icon'>> = ({
  className,
  height,
  width,
}) => (
  <svg
    width={width ?? 22}
    height={height ?? 22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${width ?? 22} ${height ?? 22}`}
    className={cx(
      'text-gray-800 shadow-transparent transition-colors hover:text-gray-500 dark:text-white dark:hover:text-gray-400',
      className,
    )}
  >
    <g clipPath="url(#a)">
      <path
        d="M18.745 18.745h-3.26V13.64c0-1.217-.021-2.784-1.695-2.784-1.698 0-1.958 1.326-1.958 2.696v5.193h-3.26V8.247h3.13v1.435h.044a3.43 3.43 0 0 1 3.087-1.696c3.304 0 3.913 2.173 3.913 5l-.001 5.76ZM4.895 6.812a1.892 1.892 0 1 1-.001-3.783 1.892 1.892 0 0 1 0 3.783Zm1.63 11.933H3.26V8.247h3.264v10.498ZM20.37.002H1.623C.737-.008.011.702 0 1.587v18.825C.01 21.3.737 22.01 1.623 22H20.37A1.61 1.61 0 0 0 22 20.412V1.586A1.609 1.609 0 0 0 20.37 0"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);
