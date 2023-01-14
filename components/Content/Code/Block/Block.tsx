'use client';

import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import Highlight, { defaultProps, Language, PrismTheme } from 'prism-react-renderer';
import { CodeBlockProps, PreProps } from '@components/Content/Code/Block';
import themeDark from 'prism-react-renderer/themes/dracula';
import themeLight from 'prism-react-renderer/themes/github';
import { cx } from 'class-variance-authority';
import { useTheme } from 'next-themes';

const generateCodeBlock = (preChildren: ReactNode) => {
  const children = preChildren as PreProps['children'];

  const language = (children.props?.className?.replace('language-', '') as Language) || 'tsx';

  return {
    language,
    code: children.props?.children,
  };
};

export const CodeBlock: FunctionComponent<CodeBlockProps> = ({ children, className }) => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<PrismTheme | null>(null);

  const { language, code } = generateCodeBlock(children);

  useEffect(() => {
    resolvedTheme && setTheme(resolvedTheme === 'dark' ? themeDark : themeLight);
  }, [resolvedTheme]);

  if (!code || !theme) return null;

  return (
    <Highlight {...defaultProps} code={code} theme={theme} language={language}>
      {({ className: preClassName, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cx(
            preClassName,
            'overflow-scroll rounded-2xl border border-gray-200 p-4 dark:border-gray-700',
            className,
          )}
          style={style}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line })} key={i}>
              <span className="pr-10 text-sm" key={i}>
                {i + 1}
              </span>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, className: 'text-sm' })} key={key} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
