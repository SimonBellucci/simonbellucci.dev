import { FunctionComponent } from 'react';
import { PatternProps, PatternComponent } from './Pattern.types';

const Pattern: FunctionComponent<PatternProps> = ({ children }) => {
  return <>{children}</>;
};

export default Pattern as PatternComponent<HTMLDivElement, PatternProps>;
