import { FunctionComponent } from 'react';
import { Section } from '@components/Layout/Section';
import { Heading, Text } from '@components/Typography';
import { CardArticle } from '@components/Content';
import { getArticlesMetadata } from '@lib/article';
import { ListArticleProps } from '@components/Block/List/Article';

export const ListArticle: FunctionComponent<ListArticleProps> = ({ data, limit }) => {
  const articlesMetadata = getArticlesMetadata(limit);

  if (!data || !articlesMetadata.length) return null;

  return (
    <Section>
      <Heading as={data.title.as} variant="display-1" className="mb-5">
        {data.title.content}
      </Heading>
      <Text className="border-b border-gray-300 pb-10 transition-colors dark:border-gray-600">
        {data.introduction}
      </Text>
      <div className="mt-6 space-y-6 lg:mt-10 lg:space-y-10">
        {articlesMetadata.map(article => (
          <CardArticle article={article} key={article.slug} />
        ))}
      </div>
    </Section>
  );
};
