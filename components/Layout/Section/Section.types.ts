import { ComponentProps } from 'react';
import { VariantProps } from 'class-variance-authority';
import { sectionStyles } from '@components/Layout/Section';

export interface SectionProps
  extends ComponentProps<'section'>,
    Omit<VariantProps<typeof sectionStyles>, 'accent'> {
  container?: boolean;
}
