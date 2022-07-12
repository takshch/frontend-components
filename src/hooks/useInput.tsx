import {
  useCallback,
  useState,
  ChangeEvent,
  useEffect,
  FormEventHandler,
} from 'react';

interface IUseInputProps {
  defaultValue?: string;
  min?: number;
}

type OnInputElement = HTMLInputElement | HTMLTextAreaElement;

const states = {
  idle: 'idle',
  error: 'error',
  valid: 'valid',
  disabled: 'disabled',
};

type UseInputReturn = {
  value: string;
  state: string;
  states: typeof states;
  setState: Function;
  onInput: FormEventHandler<OnInputElement>;
};

const useInput = ({
  defaultValue = '',
  min = 1
}: IUseInputProps = {}): UseInputReturn => {
  const [value, setValue] = useState<string>(defaultValue);
  const [state, setState] = useState<string>(states.idle);

  const onInput = useCallback((event: ChangeEvent<OnInputElement>) => {
    setValue(event.target.value);
  }, []);

  useEffect(() => {
    if (value.length >= min) {
      setState(states.valid);
    } else if (value.length <= min) {
      setState(states.idle);
    }
  }, [value]);

  const setStateFromOutside = useCallback((state: string) => {
    setState(state);
  }, []);

  return {
    value,
    state,
    states,
    onInput,
    setState: setStateFromOutside,
  };
};

export default useInput;
