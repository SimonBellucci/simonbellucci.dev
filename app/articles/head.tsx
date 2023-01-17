import { getArticleMetadata } from '@lib/article';
import { Seo } from '@components/Utility';

const Head = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const article = getArticleMetadata(slug, true);

  if (!article) return null;

  return (
    <Seo
      title="Articles"
      description="Here you can find all the articles I wrote. You can find articles about web development, productivity, human-computer interaction and anything else I can think of."
    />
  );
};

export default Head;
