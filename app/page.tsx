import { ScrollUp } from '@components/Utility/ScrollUp';
import { HeroHome } from '@components/Block/Hero/Home';
import { ListArticle } from '@components/Block/List/Article';
import { generateSeo } from '@lib/seo';

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  return generateSeo({
    title: 'Home',
    description:
      "Hi there! I'm Simon Bellucci, a Front-End Developer based in Strasbourg 🥨. On my blog, you'll find my thoughts and insights on front-end development, as well as updates on the latest industry trends and personal projects. Follow along for helpful tips and resources for fellow front-end developers.",
  });
};

const Home = async () => {
  return (
    <>
      <ScrollUp />
      <main className="overflow-x-hidden">
        <HeroHome />
        <ListArticle
          data={{
            title: {
              content: 'Latest',
              as: 'h1',
            },
            introduction:
              'My writings about web development, productivity & human-computer interactions.',
          }}
          limit={3}
        />
      </main>
    </>
  );
};

export default Home;
