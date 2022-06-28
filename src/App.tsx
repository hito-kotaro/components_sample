/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import MyWorkMenuList from './components/Lists/MyWorkMenuList';

const App = () => {
  return (
    <div>
      <h1 className="text-2xl">IconLabelButton</h1>

      <div className="flex justify-center">
        <div className="w-11/12">
          <MyWorkMenuList />
        </div>
      </div>
    </div>
  );
};

export default App;
