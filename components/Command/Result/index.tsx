import classNames from 'classnames';
import { ActionImpl } from 'kbar';
import { FunctionComponent, ElementType } from 'react';

type CommandResultProps = {
  item: ActionImpl | string;
  active: boolean;
};

const CommandResult: FunctionComponent<CommandResultProps> = ({ item, active }) => {
  const Icon = typeof item !== 'string' && (item.icon as ElementType);

  if (typeof item === 'string') {
    return (
      <span className="flex h-12 items-center px-4 text-xs font-semibold uppercase text-gray-500  dark:text-gray-400">
        {item}
      </span>
    );
  }

  return (
    <div
      className={classNames(
        'flex h-12 cursor-pointer items-center justify-between px-4 transition-colors',
        active && 'bg-gray-100 dark:bg-gray-700',
      )}
    >
      <span
        className={classNames(
          'absolute top-0 left-0 h-full w-[2px] bg-transparent transition-colors',
          active && 'bg-rose-400 dark:bg-sky-500',
        )}
      ></span>
      <span className="inline-flex items-center gap-2">
        {item.icon && Icon && <Icon className="pointer-events-none h-4 w-4" />}
        {item.name}
      </span>
      {item.shortcut?.length && (
        <div className="flex gap-2">
          {item.shortcut?.map((shortcut, i) => (
            <div
              className="rounded bg-gray-50 py-1 px-2 text-xs transition-colors dark:bg-gray-600"
              key={i}
            >
              {shortcut}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommandResult;
