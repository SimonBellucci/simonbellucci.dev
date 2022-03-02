import { FunctionComponent } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

type NavbarItemProps = {
  href: string;
  title: string;
  className?: string;
};

const NavbarItem: FunctionComponent<NavbarItemProps> = ({ href, title, className }) => {
  return (
    <li>
      <Link href={href} passHref>
        <a
          className={classNames(
            'cursor-pointer text-base text-gray-800 transition-colors hover:text-gray-500 dark:text-white dark:hover:text-gray-400',
            className,
          )}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};

export default NavbarItem;
