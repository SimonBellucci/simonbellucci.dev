import { ListArticle } from '@components/Block/List/Article';
import { generateSeo } from '@lib/seo';

export const generateMetadata = async () => {
  return generateSeo({
    title: 'Articles',
    description:
      'Here you can find all the articles I wrote. You can find articles about web development, productivity, human-computer interaction and anything else I can think of.',
  });
};

const ArticlesPage = async () => {
  return (
    <ListArticle
      data={{
        title: {
          content: 'Articles',
          as: 'h2',
        },
        introduction:
          'Here you can find all the articles I wrote. You can find articles about web development, productivity, human-computer interaction and anything else I can think of 🤓 !',
      }}
    />
  );
};

export default ArticlesPage;
