import { ComponentProps } from 'react';

export const ListTags = ['ul', 'ol'] as const;

export type ListTag = typeof ListTags[number];

export interface ListProps extends ComponentProps<'ul'> {
  as?: ListTag;
}
