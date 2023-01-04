import Pattern from '@patterns/index';

const Home = async () => {
  return (
    <main className="overflow-x-hidden">
      <Pattern.HeroHome data="ok" />
      <Pattern.ListArticle
        data={{
          title: 'Latest',
          introduction:
            'My writings about web development, productivity & human-computer interactions.',
        }}
      />
    </main>
  );
};

export default Home;
