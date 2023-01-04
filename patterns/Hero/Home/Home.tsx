import { FunctionComponent } from 'react';
import { Section } from '@components/Layout';
import { HeroHomeProps } from '@patterns/Hero/Home';
import { Heading, IconGithub, IconLinkedin, IconTwitter, Text } from '@components/Typography';
import { Button } from '@components/Action/Button';
import { Gradient } from '@components/Utility/Gradient';
import { useSocial } from '@hooks/useSocial';
import { Link } from '@components/Action/Link/Link';
import NextLink from 'next/link';

export const HeroHome: FunctionComponent<HeroHomeProps> = ({ data }) => {
  const { socials } = useSocial();

  if (!data) return null;

  return (
    <Section>
      <div className="relative z-10 space-y-10">
        <Heading as="h1" variant="display-1">
          Developer creating smooth, thoughtful user interfaces
        </Heading>
        <Text>
          Hello! I’m Simon Bellucci — front-end developer based in Strasbourg 🥨. Interested in
          cryptocurrencies, human-machine interactions, spatial computing, science and productivity.
        </Text>
        <Text>
          I’m currently working at{' '}
          <Link href="https://adeliom.com" target="_blank" rel="noreferrer">
            Adeliom
          </Link>{' '}
          where we’re building modern and intuitive websites.
        </Text>
        <div className="item-center flex space-x-10">
          <div className="flex items-center space-x-4">
            <NextLink
              href={socials.github}
              title="My Github account"
              target="_blank"
              rel="noreferrer"
            >
              <IconGithub />
            </NextLink>
            <NextLink
              href={socials.linkedin}
              title="My Linkedin account"
              target="_blank"
              rel="noreferrer"
            >
              <IconLinkedin />
            </NextLink>
            <NextLink
              href={socials.twitter}
              title="My Twitter account"
              target="_blank"
              rel="noreferrer"
            >
              <IconTwitter />
            </NextLink>
          </div>
          <Button onClick={() => window.open(`mailto:${socials.mail}`, '_blank')}>Say Hi 👋</Button>
        </div>
      </div>
      <Gradient className="absolute -right-64 top-12 -z-10 md:-right-48 lg:-right-24 xl:right-12" />
    </Section>
  );
};
