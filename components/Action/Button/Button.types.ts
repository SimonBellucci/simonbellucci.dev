import { ComponentPropsWithoutRef } from 'react';
import { VariantProps } from 'class-variance-authority';
import { buttonStyles } from '@components/Action';
import { IconProps } from '@components/Typography';

type ButtonOrLinkType = ComponentPropsWithoutRef<'button'> & ComponentPropsWithoutRef<'a'>;

export interface ButtonProps
  extends ButtonOrLinkType,
    Omit<VariantProps<typeof buttonStyles>, 'disabled' | 'accent'> {
  icon?: IconProps['icon'];
  iconSide?: 'left' | 'right';
  loading?: boolean;
}
