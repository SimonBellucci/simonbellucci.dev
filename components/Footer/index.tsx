import { FunctionComponent } from 'react';
import Image from 'next/image';
import { ArrowUpIcon } from '@heroicons/react/outline';
import Button from '../../components/Button';
import Wrapper from '../../components/Layout/Wrapper';
import Paragraph from '../../components/Typography/Paragraph';

type FooterProps = {
  className?: string;
};

const Footer: FunctionComponent<FooterProps> = ({ className }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Wrapper padding="sm" className={className}>
      <div className="flex flex-col items-center space-y-6 sm:flex-row sm:justify-between sm:space-y-0">
        <Image src="/images/gameboy.gif" width={48} height={48} alt="GameBoy" />
        <Paragraph>© {new Date().getFullYear()} - Simon Bellucci</Paragraph>
        <Button icon={ArrowUpIcon} type="inline" onClick={scrollToTop}>
          Back up
        </Button>
      </div>
    </Wrapper>
  );
};

export default Footer;
