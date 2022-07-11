import * as React from 'react';
import '../styles/index.css';
import Accordion from './components/Accordion';
import Segmented from './components/Segmented';

const App: React.FC = () => {
  return (
    <div className="container p-3">
      <div className="grid grid-rows-8 gap-y-3">
        <Segmented
          choices={['1', '2', '3', '4', '5']}
          selectedChoice={'3'}
          disabledChoice={'5'}
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
