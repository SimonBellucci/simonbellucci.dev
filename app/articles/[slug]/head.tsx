import { getArticleMetadata } from '@lib/article';
import { Seo } from '@components/Utility';

const Head = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const article = getArticleMetadata(slug);

  if (!article) return null;

  return <Seo title={article.title} description={article.subtitle} />;
};

export default Head;
