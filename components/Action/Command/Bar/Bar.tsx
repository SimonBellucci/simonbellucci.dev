import { ComponentProps, FunctionComponent } from 'react';
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
} from 'kbar';
import { cx } from 'class-variance-authority';
import { useAction } from '@hooks/useAction';
import { CommandResult } from '@components/Action/Command';
import { CommandBarProps } from '@components/Action/Command/Bar/Bar.types';

export const CommandBar: FunctionComponent<CommandBarProps> = ({ children, articles }) => {
  const { actions } = useAction(articles);

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="z-30 bg-black/10 transition-colors dark:bg-black/30">
          <KBarAnimator className="w-full max-w-xl overflow-hidden rounded-xl bg-white/80 shadow-2xl supports-backdrop-blur:bg-white/80 supports-backdrop-blur:backdrop-blur dark:bg-gray-800/80 supports-backdrop-blur:dark:bg-gray-800/80">
            <KBarSearch className="w-full rounded-t-xl bg-transparent py-4 px-6 text-base outline-none" />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

const RenderResults: FunctionComponent = () => {
  const { results } = useMatches();

  return (
    <div className={cx(results?.length ? 'border-t border-gray-300 dark:border-gray-600' : '')}>
      <KBarResults
        items={results}
        onRender={({ item, active }) => <CommandResult item={item} active={active} />}
      />
    </div>
  );
};
