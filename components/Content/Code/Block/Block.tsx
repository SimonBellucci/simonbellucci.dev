'use client';

import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import Highlight, { defaultProps, Language, PrismTheme } from 'prism-react-renderer';
import themeDark from 'prism-react-renderer/themes/dracula';
import themeLight from 'prism-react-renderer/themes/github';
import { cx } from 'class-variance-authority';
import { useTheme } from 'next-themes';
import { CodeBlockProps, PreProps } from '@components/Content/Code/Block';
import { ButtonControl } from '@components/Action';
import { CopyClipboardIcon } from '@components/Typography/Icon';

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
  const [copied, setCopied] = useState<boolean>(false);

  const { language, code } = generateCodeBlock(children);

  const copyToClipboard = async (code: string) => {
    try {
      const copy = await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      return;
    }
  };

  useEffect(() => {
    resolvedTheme && setTheme(resolvedTheme === 'dark' ? themeDark : themeLight);
  }, [resolvedTheme]);

  if (!code || !theme) return null;

  return (
    <div className="relative">
      <Highlight {...defaultProps} code={code} theme={theme} language={language}>
        {({ className: preClassName, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cx(
              preClassName,
              'overflow-scroll rounded-2xl border border-gray-200 p-4 transition-colors light:!bg-transparent dark:border-gray-700',
              className,
            )}
            style={style}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, className: 'flex' })} key={i}>
                <div
                  className="w-10 flex-shrink-0 text-[8px] text-editor-line-light dark:text-editor-line-dark"
                  key={i}
                >
                  {i + 1}
                </div>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, className: 'text-[13px]' })} key={key} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <ButtonControl onClick={() => copyToClipboard(code)} className="absolute top-4 right-4">
        <CopyClipboardIcon copied={copied} />
      </ButtonControl>
    </div>
  );
};
