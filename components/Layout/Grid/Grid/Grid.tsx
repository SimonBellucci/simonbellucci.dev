import {
  GridComponent,
  GridProps,
} from '@components/Layout/Grid/Grid/Grid.types';
import { FunctionComponent } from 'react';

const Grid: FunctionComponent<GridProps> = ({ children }) => {
  return <>{children}</>;
};

export default Grid as GridComponent<HTMLDivElement, GridProps>;
