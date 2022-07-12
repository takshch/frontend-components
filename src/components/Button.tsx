import classNames from 'classnames';
import * as React from 'react';

interface IButtonProps {
  text: string;
  style?: string;
  color?: string;
  onClick: Function;
  disabled?: boolean;
}

function Button({
  text,
  style = 'regular',
  color = 'green',
  onClick,
  disabled,
}: IButtonProps) {
  const isStyle = (expectedStyle: string, expectedColor: string) => {
    return !disabled && style === expectedStyle && color === expectedColor;
  };

  const buttonClass = classNames('p-3 rounded w-full', {
    'border border-gray-600 text-gray-600': disabled,
    'border border-green-700': !disabled && color === 'green',
    'border border-red-600': !disabled && color === 'red',
    'bg-green-700 text-white': isStyle('regular', 'green'),
    'bg-red-600 text-white': isStyle('regular', 'red'),
    'text-green-700': isStyle('outline', 'green'),
    'text-red-600': isStyle('outline', 'red'),
  });

  return (
    <button className={buttonClass} onClick={(...args) => onClick(...args)}>
      {text}
    </button>
  );
}

export default Button;
