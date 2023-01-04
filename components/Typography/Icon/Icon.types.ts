import { ComponentProps, ComponentType } from 'react';
import { VariantProps } from 'class-variance-authority';
import { iconStyles } from '@components/Typography';

export interface IconProps
  extends Omit<ComponentProps<'svg'>, 'color'>,
    VariantProps<typeof iconStyles> {
  icon: ComponentType<ComponentProps<'svg'>>;
}
