import React from 'react';
import { AiOutlineHistory, AiOutlineUser } from 'react-icons/ai';
import { BsFillInboxFill } from 'react-icons/bs';
import { GiStamper } from 'react-icons/gi';
import { GrUserWorker } from 'react-icons/gr';
import { RiTeamLine } from 'react-icons/ri';
import IconLabelButton from '../Buttons/IconLabelButton';

const MyWorkMenuList = () => {
  return (
    <fieldset className="border-1 p-2 rounded-lg">
      <legend className="ml-2">MyWorkMenu</legend>
      <IconLabelButton
        text="QuestBoard"
        icon={<BsFillInboxFill />}
        iconColor="bg-green-400"
        path="/questboard"
      />

      <div className="h-4" />

      <IconLabelButton
        text="ApproveRequest"
        icon={<GiStamper />}
        iconColor="bg-blue-400"
        path="/approverequest"
      />

      <div className="h-4" />

      <IconLabelButton
        text="TimeLine"
        icon={<AiOutlineHistory />}
        iconColor="bg-yellow-400"
        path="/timeline"
      />

      <div className="h-4" />

      <IconLabelButton
        text="Teams"
        icon={<RiTeamLine />}
        iconColor="bg-purple-400"
        path="/teams"
      />

      <div className="h-4" />

      <IconLabelButton
        text="Users"
        icon={<AiOutlineUser />}
        iconColor="bg-orange-400"
        path="/users"
      />

      <div className="h-4" />

      <IconLabelButton
        text="Jobs"
        icon={<GrUserWorker />}
        iconColor="bg-gray-400"
        path="/jobs"
      />
    </fieldset>
  );
};

export default MyWorkMenuList;
