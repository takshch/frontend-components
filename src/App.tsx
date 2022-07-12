import * as React from 'react';
import '../styles/index.css';
import Accordion from './components/Accordion';
import Button from './components/Button';
import Input from './components/Input';
import Segmented from './components/Segmented';

const App: React.FC = () => {
  return (
    <div className="container p-3">
      <div className="grid grid-rows-8 gap-y-3">
        <div className="flex flex-wrap gap-3">
          <Input defaultValue={'Hello world'} min={5} />
          <Input defaultValue={'Hello world'} min={5} error={true} />
          <Input defaultValue={'Hello world'} min={5} disabled={true} />
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="grow shrink-0 md:w-25 sm:w-100">
            <Button text="Green" color="green" onClick={() => {}} />
          </div>
          <div className="grow shrink-0 md:w-25 sm:w-100">
            <Button
              text="Green outline"
              color="green"
              style="outline"
              onClick={() => {}}
            />
          </div>
          <div className="grow shrink-0 md:w-25 sm:w-100">
            <Button text="Red" color="red" onClick={() => {}} />
          </div>
          <div className="grow shrink-0 md:w-25 sm:w-100">
            <Button
              text="Red outline"
              color="red"
              style="outline"
              onClick={() => {}}
            />
          </div>
          <div className="grow shrink-0 md:w-25 sm:w-100">
            <Button
              text="disabled"
              color="red"
              style="outline"
              disabled={true}
              onClick={() => {}}
            />
          </div>
        </div>
        <Segmented
          choices={['1', '2', '3', '4', '5']}
          selectedChoice="3"
          disabledChoice="5"
          // disabled={true}
        />
        <Accordion
          openIcon="+"
          closeIcon="-"
          heading="Can I order sample book?"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,"
        />
      </div>
    </div>
  );
};

export default App;
