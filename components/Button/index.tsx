import classNames from 'classnames';
import { FunctionComponent, ComponentType, ComponentProps, ReactNode, ElementType } from 'react';

type ButtonProps = {
  children: ReactNode;
  type?: 'primary' | 'inline' | 'control';
  icon?: ComponentType<ComponentProps<'svg'>>;
  side?: 'start' | 'end';
  onClick?: () => void;
  className?: string;
};

const classes = {
  base: 'cursor-pointer inline-flex items-center text-base font-medium transition-all duration-300',
  type: {
    primary:
      'rounded-[10px] bg-gray-800 py-2 px-4 text-white shadow-transparent hover:shadow-hover hover:shadow-rose-400 dark:bg-white dark:text-gray-800 dark:hover:shadow-sky-500',
    inline: 'hover:text-rose-400 dark:text-white dark:hover:text-green-400',
    control:
      'min-h-[42px] rounded-[8px] border border-gray-300 bg-gray-100 p-2 text-xs text-gray-500 shadow-transparent hover:border-rose-400 hover:text-rose-400 hover:shadow-hover hover:shadow-rose-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:border-sky-600 dark:hover:text-sky-500 dark:hover:shadow-sky-500',
  },
  icon: {
    base: 'w-5 h-5',
    start: 'mr-2',
    end: 'ml-2',
  },
};

const Button: FunctionComponent<ButtonProps> = ({
  type = 'primary',
  children,
  icon,
  side = 'end',
  onClick,
  className,
}) => {
  const Icon = icon as ElementType;

  const handleClick = () => {
    if (!onClick) return;
    onClick();
  };

  return (
    <button
      className={classNames(classes.base, classes.type[type], className)}
      onClick={handleClick}
    >
      {icon && side === 'start' && (
        <Icon className={classNames(classes.icon.base, classes.icon[side])} />
      )}
      {children}
      {icon && side === 'end' && (
        <Icon className={classNames(classes.icon.base, classes.icon[side])} />
      )}
    </button>
  );
};

export default Button;
