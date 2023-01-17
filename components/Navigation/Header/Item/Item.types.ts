import { LinkProps } from 'next/link';
import { ComponentProps } from 'react';
import { VariantProps } from 'class-variance-authority';
import { headerItemStyles } from '@components/Navigation/Header/Item/Item.styles';

export interface HeaderItemProps
  extends LinkProps,
    Omit<ComponentProps<'a'>, 'href'>,
    VariantProps<typeof headerItemStyles> {
  disabled?: boolean;
}
