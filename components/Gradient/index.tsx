import classNames from 'classnames';
import { FunctionComponent } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

type GradientProps = {
  className?: string;
};

const Gradient: FunctionComponent<GradientProps> = ({ className }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 2]);

  return (
    <motion.div className={classNames(className)} style={{ scale }}>
      <div
        className={classNames(
          'h-[500px] w-[500px] animate-gradient rounded-full',
          'bg-gradient-to-t from-gradient-secondary/50 to-gradient-primary opacity-70 blur-3xl',
          'dark:from-gradient-dark-secondary dark:to-gradient-dark-primary dark:opacity-50',
        )}
      >
        <div
          className={classNames(
            'absolute top-0 left-1/3 h-[300px] w-[300px] rounded-full',
            'bg-gradient-to-t from-transparent to-gradient-tertiary dark:to-gradient-dark-tertiary',
          )}
        />
      </div>
    </motion.div>
  );
};

export default Gradient;
