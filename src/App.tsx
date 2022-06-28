/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { BsFillInboxFill } from 'react-icons/bs';
import { GiStamper } from 'react-icons/gi';
import { AiOutlineHistory, AiOutlineUser } from 'react-icons/ai';
import { RiTeamLine } from 'react-icons/ri';
import { GrUserWorker } from 'react-icons/gr';
import IconLabelButton from './components/Buttons/IconLabelButton';

const App = () => {
  return (
    <div>
      <h1 className="text-2xl">IconLabelButton</h1>
      <IconLabelButton
        text="QuestBoard"
        icon={<BsFillInboxFill />}
        iconColor="bg-green-400"
        path="/questboard"
      />
      <IconLabelButton
        text="ApproveRequest"
        icon={<GiStamper />}
        iconColor="bg-blue-400"
        path="/approverequest"
      />
      <IconLabelButton
        text="TimeLine"
        icon={<AiOutlineHistory />}
        iconColor="bg-yellow-400"
        path="/timeline"
      />
      <IconLabelButton
        text="Teams"
        icon={<RiTeamLine />}
        iconColor="bg-purple-400"
        path="/teams"
      />
      <IconLabelButton
        text="Users"
        icon={<AiOutlineUser />}
        iconColor="bg-orange-400"
        path="/users"
      />
      <IconLabelButton
        text="Jobs"
        icon={<GrUserWorker />}
        iconColor="bg-gray-400"
        path="/jobs"
      />
    </div>
  );
};

export default App;
