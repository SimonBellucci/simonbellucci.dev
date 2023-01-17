import { FunctionComponent, useEffect, useState } from 'react';
import { Sandpack, SandpackProps } from '@codesandbox/sandpack-react';
import { githubLight, dracula } from '@codesandbox/sandpack-themes';
import { useTheme } from 'next-themes';

export const CodeEditor: FunctionComponent<SandpackProps> = props => {
  const { resolvedTheme } = useTheme();

  const [theme, setTheme] = useState<SandpackProps['theme']>();

  /**
   * Workaround waiting for Next Themes to properly handle Next13 appDir
   * @see https://github.com/pacocoursey/next-themes/issues/152
   */
  useEffect(() => {
    resolvedTheme && setTheme(resolvedTheme === 'light' ? githubLight : dracula);
  }, [resolvedTheme]);

  return (
    <div className="mb-9">
      <Sandpack
        theme={theme}
        options={{
          showLineNumbers: true,
          showTabs: true,
          editorHeight: 600,
          editorWidthPercentage: 60,
          externalResources: ['https://cdn.tailwindcss.com'],
          classes: {
            'sp-layout': '!rounded-2xl border !border-gray-200 dark:!border-gray-700',
            'sp-cm': 'transition-colors',
          },
        }}
        {...props}
      />
    </div>
  );
};
