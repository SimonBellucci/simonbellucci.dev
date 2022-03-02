import classNames from 'classnames';
import { FunctionComponent, ReactNode } from 'react';

type WrapperProps = {
  children: ReactNode;
  padding?: 'sm' | 'normal';
  className?: string;
};

const classes = {
  base: 'lg:grid lg:grid-cols-12',
  padding: {
    sm: 'py-5 lg:py-10',
    normal: 'py-10 lg:py-20',
  },
};

const Wrapper: FunctionComponent<WrapperProps> = ({ padding = 'normal', children, className }) => {
  return (
    <div className="container">
      <div className={classNames(classes.base, classes.padding[padding], className)}>
        <div className="lg:col-span-10 lg:col-start-2 2xl:col-span-8 2xl:col-start-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
