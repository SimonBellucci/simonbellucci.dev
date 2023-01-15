import { useEffect } from 'react';

/**
 * Workaround waiting NextJS 13 to properly handle scroll up on route change
 * @see https://github.com/vercel/next.js/issues/42492
 */
export const ScrollUp = () => {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []);

  return null;
};
