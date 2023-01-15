import { ComponentProps, FunctionComponent } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { cx } from 'class-variance-authority';

export const Gradient: FunctionComponent<ComponentProps<'div'>> = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 2]);

  return (
    <m.div className={cx(className)} style={{ scale }}>
      <div
        className={cx(
          'h-[500px] w-[500px] animate-gradient rounded-full',
          'bg-gradient-to-t from-gradient-secondary/50 to-gradient-primary opacity-70 blur-3xl',
          'dark:from-gradient-dark-secondary dark:to-gradient-dark-primary dark:opacity-50',
        )}
      >
        <div
          className={cx(
            'absolute top-0 left-1/3 h-[300px] w-[300px] rounded-full',
            'bg-gradient-to-t from-transparent to-gradient-tertiary dark:to-gradient-dark-tertiary',
          )}
        />
      </div>
    </m.div>
  );
};
