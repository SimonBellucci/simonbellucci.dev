import NextImage from 'next/image';
import { FunctionComponent } from 'react';
import { cx } from 'class-variance-authority';
import { ImageProps } from '@components/Utility/Image/Image.types';

export const Image: FunctionComponent<ImageProps> = ({ className, cover, mdx, ...props }) => {
  return (
    <NextImage
      className={cx(
        props.fill || cover ? 'object-cover' : '',
        className,
        mdx ? 'mx-auto mb-9' : '',
      )}
      {...props}
    />
  );
};
