import { FunctionComponent, useEffect, useState } from 'react';
import { Sandpack, SandpackProps } from '@codesandbox/sandpack-react';
import { githubLight, dracula } from '@codesandbox/sandpack-themes';
import { useTheme } from 'next-themes';

export const CodeEditor: FunctionComponent<SandpackProps> = props => {
  const { resolvedTheme } = useTheme();

  const [theme, setTheme] = useState<SandpackProps['theme']>();

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
