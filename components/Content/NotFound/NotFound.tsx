import useLayout from '@hooks/useLayout/useLayout';
import { useEffect } from 'react';
import { Heading, Text } from '@components/Typography';
import { Button } from '@components/Action';
import { Gradient } from '@components/Utility/Gradient';

export const NotFoundPage = () => {
  const { setShowFooter } = useLayout();

  useEffect(() => {
    setShowFooter(false);
    return () => setShowFooter(true);
  }, [setShowFooter]);

  return (
    <div className="flex h-[80vh] w-full items-center justify-center">
      <div className="relative">
        <Heading as="h1" variant="display-2" className="mb-6">
          404 Not Found
        </Heading>
        <Text size="xl" className="mb-4">
          How did you end up here ? 🧐
        </Text>
        <Button href="/">Return to the homepage</Button>
        <Gradient className="absolute -top-[300px] left-[80%] -z-10" />
      </div>
    </div>
  );
};
