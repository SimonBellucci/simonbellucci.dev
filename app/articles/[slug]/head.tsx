import { NextSeo } from 'next-seo';
import { getArticleMetadata } from '@lib/article';

const Head = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const article = getArticleMetadata(slug, true);

  if (!article) return null;

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
      <NextSeo useAppDir={true} title={article.title} description={article.subtitle} />
    </>
  );
};

export default Head;
