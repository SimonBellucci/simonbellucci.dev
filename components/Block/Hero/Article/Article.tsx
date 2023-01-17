import { FunctionComponent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@components/Action';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Heading, Text } from '@components/Typography';
import readingTime from 'reading-time';
import { HeroArticleProps } from '@components/Block/Hero/Article/Article.types';

export const HeroArticle: FunctionComponent<HeroArticleProps> = ({ data: article }) => {
  const router = useRouter();

  const time = readingTime(article.content);

  return (
    <div className="mb-12 border-b border-gray-200 py-4 dark:border-gray-600">
      <Button onClick={() => router.back()} variant="tertiary" icon={ArrowLeftIcon} iconSide="left">
        Back
      </Button>
      <Heading as="h1" variant="display-2" className="mb-4">
        {article.meta.title}
      </Heading>
      <Text size="sm" className="text-gray-500 dark:!text-gray-400">
        {time.text} /{' '}
        {new Date(article.meta.date).toLocaleDateString('en-EN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </Text>
    </div>
  );
};
