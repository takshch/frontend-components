import classNames from 'classnames';
import React, { useEffect } from 'react';
import useInput from '../hooks/useInput';

interface IInputProps {
  min?: number;
  defaultValue?: string;
  disabled?: boolean,
  error?: boolean
}

function Input({ defaultValue, min, disabled, error }: IInputProps) {
  const { value, state, states, onInput, setState } = useInput({ defaultValue, min });

  useEffect(() => {
    if(disabled) {
      setState(states.disabled);
    }
  }, [disabled]);

  useEffect(() => {
    if(error) {
      setState(states.error);
    }
  }, [error]);

  const inputClass = classNames(
    'rounded border-2 border-gray-300 py-1 px-2 focus:outline-none focus:border-gray-600',
    {
      'border-rose-600 focus:border-rose-600': state === states.error,
      'border-green-600 focus:border-green-600': state === states.valid,
      'text-gray-600': state === states.disabled,
    }
  );

  return (
    <div>
      <input type="text" onInput={onInput} className={inputClass} value={value} disabled={disabled} />
    </div>
  );
}

export default Input;
