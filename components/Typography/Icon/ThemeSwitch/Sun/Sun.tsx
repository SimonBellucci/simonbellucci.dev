'use client';

import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

export const IconSun: FunctionComponent<{ duration?: number }> = ({ duration = 0.5 }) => {
  return (
    <motion.svg
      key="sun"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        exit={{
          opacity: 0,
          rotate: -45,
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
