import { FunctionComponent, PropsWithoutRef, ReactNode } from 'react';
import { GridCol } from '@components/Layout/Grid/Col';
import { GridContainer } from '@components/Layout/Grid/Container';

export type GridComponent<T, P = {}> = FunctionComponent<PropsWithoutRef<P>> & {
  Col: typeof GridCol;
  Container: typeof GridContainer;
};

export interface GridProps {
  children?: ReactNode;
}
