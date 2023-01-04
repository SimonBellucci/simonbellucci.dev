import { ComponentProps } from 'react';
import { VariantProps } from 'class-variance-authority';
import { linkStyles } from '@components/Action/Link/Link.styles';

export interface LinkProps
  extends Omit<ComponentProps<'a'>, 'color'>,
    VariantProps<typeof linkStyles> {
  href: string;
}
