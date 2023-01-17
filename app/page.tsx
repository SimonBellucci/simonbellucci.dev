import { ScrollUp } from '@components/Utility/ScrollUp';
import { HeroHome } from '@components/Block/Hero/Home';
import { ListArticle } from '@components/Block/List/Article';

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
