import classNames from 'classnames';
import { FunctionComponent, ReactNode } from 'react';

type HeadingTag = 'h1' | 'h2' | 'h3';

type HeadingProps = {
  children: ReactNode;
  level: 1 | 2 | 3;
  type?: HeadingTag;
  className?: string;
};

const classes = {
  base: 'text-gray-800 transition-colors dark:text-white',
  type: {
    h1: 'text-5xl font-semibold lg:text-6xl',
    h2: 'text-4xl font-semibold lg:text-5xl',
    h3: 'text-2xl font-semibold',
  },
};

const Heading: FunctionComponent<HeadingProps> = ({ children, level, type, className }) => {
  const Tag = `h${level}` as HeadingTag;

  return (
    <Tag className={classNames(classes.base, classes.type[type ?? Tag], className)}>{children}</Tag>
  );
};

export default Heading;
