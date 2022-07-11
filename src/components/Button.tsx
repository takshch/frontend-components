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
    'bg-gray-600 text-white': disabled,
    'bg-green-700 text-white': isStyle('regular', 'green'),
    'bg-red-600 text-white': isStyle('regular', 'red'),
    'text-green-700 border-2 border-green-700': isStyle('outline', 'green'),
    'text-red-600 border-2 border-red-600': isStyle('outline', 'red'),
  });

  return (
    <button className={buttonClass} onClick={(...args) => onClick(...args)}>
      {text}
    </button>
  );
}

export default Button;
