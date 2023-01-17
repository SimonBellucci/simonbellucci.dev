import { FunctionComponent } from 'react';
import { ListItemProps } from '@components/Typography/List/Item';

export const ListItem: FunctionComponent<ListItemProps> = ({ children }) => {
  return <li className="mb-6">{children}</li>;
};
