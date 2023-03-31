import { ComponentProps, FunctionComponent } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { Button } from '@components/Action/Button';
import { Section } from '@components/Layout';
import { Text } from '@components/Typography';
import { Image } from '@components/Utility';
import useLayout from '@hooks/useLayout/useLayout';

export const Footer: FunctionComponent<ComponentProps<'div'>> = ({ className }) => {
  const { showFooter } = useLayout();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!showFooter) {
    return null;
  }

  return (
    <Section className={className}>
      <div className="flex flex-col items-center space-y-6 sm:flex-row sm:justify-between sm:space-y-0">
        <Image src="/images/gameboy.gif" width={48} height={48} alt="GameBoy" />
        <Text>© {new Date().getFullYear()} - Simon Bellucci</Text>
        <Button icon={ArrowUpIcon} variant="tertiary" onClick={scrollToTop}>
          Back up
        </Button>
      </div>
    </Section>
  );
};
