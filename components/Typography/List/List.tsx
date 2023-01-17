import { FunctionComponent } from 'react';
import { ListProps } from '@components/Typography/List/List.types';
import { cx } from 'class-variance-authority';

export const List: FunctionComponent<ListProps> = ({ as: Tag = 'ul', children, className }) => {
  if (!children) return null;

  return (
    <Tag
      className={cx(
        Tag === 'ul' ? 'list-disc' : 'list-[decimal-leading-zero]',
        'pl-8 transition-colors marker:font-semibold marker:text-rose-500 marker:dark:text-sky-500',
        className,
      )}
    >
      {children}
    </Tag>
  );
};
