/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { BsFillInboxFill } from 'react-icons/bs';
import { GiStamper } from 'react-icons/gi';
import IconLabelButton from './components/IconLabelButton';

const App = () => {
  return (
    <div>
      <h1 className="text-2xl">IconLabelButton</h1>
      <IconLabelButton
        text="QuestBoard"
        icon={<BsFillInboxFill className="h-4 w-4" />}
        iconColor="bg-green-400"
      />
      <IconLabelButton
        text="ApproveRequest"
        icon={<GiStamper className="h-4 w-4" />}
        iconColor="bg-blue-400"
      />
      <IconLabelButton
        text="Quest"
        icon={<BsFillInboxFill className="h-4 w-4" />}
        iconColor="bg-green-400"
      />
    </div>
  );
};

export default App;
