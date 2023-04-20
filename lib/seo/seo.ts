import { Metadata } from 'next';
import { BaseMetadata } from '@lib/seo';

export const generateSeo = (metadata: BaseMetadata): Metadata => {
  const url = process.env.VERCEL_URL || 'http://localhost:3000';

  return {
    title: `${metadata.title} | Simon Bellucci`,
    description: metadata.description,
    metadataBase: new URL(url),
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url,
      siteName: 'Next.js',
      images: [
        {
          url: `/api/og?title=${metadata.title}&description=${metadata.description}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en-US',
      type: 'website',
    },
  };
};
