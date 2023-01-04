'use client';

import { useState, useEffect } from 'react';

export const usePlatform = () => {
  const [isMac, setIsMac] = useState<boolean>(false);

  useEffect(() => {
    setIsMac(navigator.userAgent.indexOf('Mac') > -1);
  }, []);

  return {
    isMac,
  };
};
