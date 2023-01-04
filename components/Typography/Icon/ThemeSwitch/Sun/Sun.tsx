'use client';

import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

export const IconSun: FunctionComponent<{ duration?: number }> = ({ duration = 0.5 }) => {
  return (
    <motion.svg
      key="moon"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        initial={{
          opacity: 0,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        exit={{
          opacity: 0,
          pathLength: 0,
        }}
        transition={{
          duration,
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
  );
};
