import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import { getArticleBySlug, getArticlesMetadata } from '@lib/article';
import { Renderer } from '@components/Content/Renderer';
import { Section } from '@components/Layout';
import { Heading, Text } from '@components/Typography';
import readingTime from 'reading-time';
import { ScrollUp } from '@components/Utility/ScrollUp';

export const generateStaticParams = async () => {
  const articles = getArticlesMetadata();
  return articles.map(article => ({ slug: article.slug }));
};

const ArticlePage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: any };
}) => {
  const { slug } = params;

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const source = await serialize(article.content);
  const time = readingTime(article.content);

  return (
    <>
      <ScrollUp />
      <article>
        <Section>
          <div className="mb-12">
            <Heading as="h1" variant="display-2" className="mb-4">
              {article.data.title}
            </Heading>
            <Text size="sm" className="text-gray-500 dark:!text-gray-400">
              {time.text} /{' '}
              {new Date(article.data.date).toLocaleDateString('en-EN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
          </div>
          <Renderer {...source} />
        </Section>
      </article>
    </>
  );
};

export default ArticlePage;
