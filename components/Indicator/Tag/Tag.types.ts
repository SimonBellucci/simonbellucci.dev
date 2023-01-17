import { ComponentProps } from 'react';
import { VariantProps } from 'class-variance-authority';
import { tagStyles } from '@components/Indicator';

export interface TagProps extends ComponentProps<'div'>, VariantProps<typeof tagStyles> {}
