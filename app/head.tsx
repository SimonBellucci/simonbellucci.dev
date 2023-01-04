import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../next-seo.config';

const Head = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
      <NextSeo
        useAppDir={true}
        {...NEXT_SEO_DEFAULT}
        title="Home"
        description="Hi there! I'm Simon Bellucci, a Front-End Developer based in Strasbourg 🥨. On my blog, you'll find my thoughts and insights on front-end development, as well as updates on the latest industry trends and personal projects. Follow along for helpful tips and resources for fellow front-end developers."
      />
    </>
  );
};

export default Head;
