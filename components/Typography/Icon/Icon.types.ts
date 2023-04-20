import { ComponentProps } from 'react';
import { VariantProps } from 'class-variance-authority';
import { iconStyles } from '@components/Typography';
import * as React from 'react';

export interface IconProps
  extends Omit<ComponentProps<'svg'>, 'color'>,
    VariantProps<typeof iconStyles> {
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
}
