import React, { useCallback, useState } from 'react';

interface IAccordionProps {
  content: string;
  heading: string;
  openIcon: React.Component | string;
  closeIcon: React.Component | string;
  iconDisabled?: boolean | undefined;
}

function Accordion({
  content,
  heading,
  openIcon,
  closeIcon,
  iconDisabled,
}: IAccordionProps) {
  const [isOpened, setIsOpened] = useState(false);

  const toggleIsOpened = useCallback(() => {
    setIsOpened((isOpened) => !isOpened);
  }, []);

  return (
    <div className="bg-white rounded border border-gray-200 divide-y divide-gray-200">
      <div
        role="button"
        className="flex py-3 px-4"
        onClick={() => toggleIsOpened()}
      >
        {!iconDisabled && (
          <div className="mr-2">
            {isOpened ? <>{closeIcon}</> : <>{openIcon}</>}
          </div>
        )}
        <div>{heading}</div>
      </div>
      {isOpened && <div className="py-3 px-4">{content}</div>}
    </div>
  );
}

export default Accordion;
