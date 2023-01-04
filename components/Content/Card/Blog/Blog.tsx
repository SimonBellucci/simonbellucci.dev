import { FunctionComponent } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import moment from 'moment';
import { Heading, Text } from '@components/Typography';
import { Button } from '@components/Action';
import { CardBlogProps } from '@components/Content/Card/Blog/Blog.types';

export const CardBlog: FunctionComponent<CardBlogProps> = ({
  date,
  title,
  description,
  url,
  buttonTitle,
}) => {
  return (
    <Link
      href={url}
      className="flex cursor-pointer flex-col rounded-[16px] p-6 transition-colors hover:bg-gray-100/40 dark:hover:bg-gray-700/30 lg:flex-row"
    >
      <div className="mb-3 shrink-0 text-sm text-gray-500 transition-colors dark:text-gray-500 lg:mb-0 lg:mr-20">
        {moment(date).format('MMM D, YYYY')}
      </div>
      <div className="flex flex-col items-start space-y-4">
        <Heading as="h3" variant="display-5">
          {title}
        </Heading>
        <Text>{description}</Text>
        <Button variant="tertiary" icon={ArrowRightIcon}>
          {buttonTitle ?? 'Read more'}
        </Button>
      </div>
    </Link>
  );
};
