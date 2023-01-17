import { ScrollUp } from '@components/Utility/ScrollUp';
import { ListArticle } from '@components/Block/List/Article';

const ArticlesPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: any };
}) => {
  return (
    <>
      <ScrollUp />
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
    </>
  );
};

export default ArticlesPage;
