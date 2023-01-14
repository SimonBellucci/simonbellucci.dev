import { ComponentProps, FunctionComponent } from 'react';
import { cx } from 'class-variance-authority';

export const CodeInline: FunctionComponent<ComponentProps<'code'>> = props => {
  return (
    <code
      className={cx([
        'transitions-colors rounded-lg border border-gray-200 bg-gray-100 p-1 text-sm text-rose-400',
        'dark:border-gray-700 dark:bg-[#282A36] dark:text-[#BD93F9]',
      ])}
    >
      {props.children}
    </code>
  );
};
