import classNames from 'classnames';
import React, { useCallback, useState } from 'react';

interface ISegmentedProps {
  choices: Array<string>;
  selectedChoice?: string;
  disabledChoice?: string;
  disabled?: boolean;
}

interface IItemProps {
  choice: string;
  isSelected: boolean;
  isDisabled?: boolean;
  onClick: Function;
}

function Item({ choice, isSelected, isDisabled, onClick }: IItemProps) {
  const itemClass = classNames('p-2 text-center', {
    'bg-gray-600 text-white': isSelected,
    'bg-gray-200 text-black': isDisabled,
  });

  return (
    <div
      className={itemClass}
      role="button"
      onClick={() => !isDisabled && onClick()}
    >
      {choice}
    </div>
  );
}

function Segmented({
  choices,
  selectedChoice: defaultValue,
  disabledChoice,
  disabled,
}: ISegmentedProps) {
  const [selectedChoice, setSelectedChoice] = useState<string | undefined>(
    defaultValue
  );

  const selectChoice = useCallback((choice: string) => {
    setSelectedChoice(choice);
  }, []);

  const isSelected = (choice: string) => selectedChoice === choice;
  const isDisabled = (choice: string) => disabled || disabledChoice === choice;

  return (
    <div className="grid grid-flow-col border border-gray-200 rounded p-1 divide-x divide-gray-200">
      {choices.map((choice) => (
        <Item
          choice={choice}
          isSelected={isSelected(choice)}
          isDisabled={isDisabled(choice)}
          onClick={() => selectChoice(choice)}
        />
      ))}
    </div>
  );
}

export default Segmented;
