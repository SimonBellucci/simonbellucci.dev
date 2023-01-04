import { FunctionComponent } from 'react';
import { Section } from '@components/Layout/Section';
import { ArticlesProps } from '@patterns/List/Article';
import { Heading, Text } from '@components/Typography';
import { CardBlog } from '@components/Content';

export const ListArticle: FunctionComponent<ArticlesProps> = ({ data }) => {
  const fakeCard = {
    date: new Date(),
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis orci rutrum pulvinar nisl, quam neque in.',
    url: '/test',
  };

  if (!data) return null;

  return (
    <Section>
      <Heading as="h2" variant="display-1" className="mb-5">
        {data.title}
      </Heading>
      <Text className="border-b border-gray-300 pb-10 transition-colors dark:border-gray-600">
        {data.introduction}
      </Text>
      <div className="mt-6 space-y-6 lg:mt-10 lg:space-y-10">
        <CardBlog {...fakeCard} />
        <CardBlog {...fakeCard} />
        <CardBlog {...fakeCard} />
      </div>
    </Section>
  );
};
