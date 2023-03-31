import { Metadata } from 'next';
import { BaseMetadata } from '@lib/seo';

export const generateSeo = (metadata: BaseMetadata): Metadata => {
  return {
    title: `${metadata.title} | Simon Bellucci`,
    description: metadata.description,
  };
};
