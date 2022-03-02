import { FunctionComponent } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';
import moment from 'moment';
import Heading from '../../Typography/Heading';
import Paragraph from '../../Typography/Paragraph';
import Button from '../../Button';

type BlogCardProps = {
  date: Date;
  title: string;
  description: string;
  url: string;
  buttonTitle?: string;
};

const BlogCard: FunctionComponent<BlogCardProps> = ({
  date,
  title,
  description,
  url,
  buttonTitle,
}) => {
  return (
    <Link href={url} passHref>
      <a className="flex cursor-pointer flex-col rounded-[16px] p-6 transition-colors hover:bg-gray-100/40 dark:hover:bg-gray-700/30 lg:flex-row">
        <div className="mb-3 shrink-0 text-sm text-gray-500 transition-colors dark:text-gray-500 lg:mb-0 lg:mr-20">
          {moment(date).format('MMM D, YYYY')}
        </div>
        <div className="flex flex-col items-start space-y-4">
          <Heading level={3}>{title}</Heading>
          <Paragraph>{description}</Paragraph>
          <Button type="inline" icon={ArrowRightIcon}>
            {buttonTitle ?? 'Read more'}
          </Button>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
