import classNames from 'classnames';
import { FunctionComponent, ReactNode } from 'react';

type ParagraphProps = {
  children: ReactNode;
  size?: 'normal' | 'lg';
  className?: string;
};

const classes = {
  base: 'text-gray-500 transition-colors dark:text-gray-400',
  size: {
    normal: 'text-base',
    lg: 'text-lg',
  },
};

const Paragraph: FunctionComponent<ParagraphProps> = ({ size = 'normal', children, className }) => {
  return <p className={classNames(classes.base, classes.size[size], className)}>{children}</p>;
};

export default Paragraph;
