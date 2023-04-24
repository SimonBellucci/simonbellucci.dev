import { ComponentProps, FunctionComponent } from 'react';
import { cx } from 'class-variance-authority';

export const CodeInline: FunctionComponent<ComponentProps<'code'>> = props => {
  return (
    <code
      className={cx([
        'transitions-colors break-all rounded-lg border border-gray-200 bg-editor-bg-light p-1 text-sm text-editor-fg-light',
        'dark:border-gray-700 dark:bg-editor-bg-dark dark:text-editor-fg-dark',
      ])}
    >
      {props.children}
    </code>
  );
};
