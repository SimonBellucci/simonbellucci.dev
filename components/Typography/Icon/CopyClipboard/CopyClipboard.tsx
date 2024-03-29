'use client';

import { FunctionComponent } from 'react';
import { AnimatePresence, m, Variants } from 'framer-motion';

const pathLengthAnimation: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    pathLength: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const CheckIcon: FunctionComponent = () => {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <m.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
        variants={pathLengthAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
    </m.svg>
  );
};

const CopyDocumentIcon: FunctionComponent = () => {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <m.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
        variants={pathLengthAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
    </m.svg>
  );
};

export const CopyClipboardIcon: FunctionComponent<{ copied: boolean }> = ({ copied }) => {
  return <AnimatePresence>{copied ? <CheckIcon /> : <CopyDocumentIcon />}</AnimatePresence>;
};
