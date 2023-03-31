import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import { getArticleBySlug, getArticleMetadata, getArticlesMetadata } from '@lib/article';
import { Renderer } from '@components/Content/Renderer';
import { Section } from '@components/Layout';
import { ScrollUp } from '@components/Utility/ScrollUp';
import { HeroArticle } from '@components/Block/Hero/Article';
import { generateSeo } from '@lib/seo';

export const generateStaticParams = async () => {
  const articles = getArticlesMetadata();
  return articles.map(article => ({ slug: article.slug }));
};

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const article = getArticleMetadata(slug);

  if (!article) return null;

  return generateSeo(article);
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

  return (
    <>
      <ScrollUp />
      <article>
        <Section>
          <HeroArticle
            data={{
              content: article.content,
              meta: article.data,
            }}
          />
          <Renderer {...source} />
        </Section>
      </article>
    </>
  );
};

export default ArticlePage;
