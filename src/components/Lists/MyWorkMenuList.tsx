import React from 'react';
import { AiOutlineHistory, AiOutlineUser } from 'react-icons/ai';
import { BsFillInboxFill } from 'react-icons/bs';
import { GiStamper } from 'react-icons/gi';
import { TbTie } from 'react-icons/tb';
import { RiTeamLine } from 'react-icons/ri';
import IconLabelButton from '../Buttons/IconLabelButton';

const MyWorkMenuList = () => {
  const space = 2;
  return (
    <fieldset className="border-1 p-2 rounded-lg light-color">
      <legend className="ml-2">MyWorkMenu</legend>
      <IconLabelButton
        text="QuestBoard"
        icon={<BsFillInboxFill color="#ffffff" />}
        iconColor="bg-green-400"
        path="/questboard"
      />

      <div className={`h-${space}`} />

      <IconLabelButton
        text="ApproveRequest"
        icon={<GiStamper color="#ffffff" />}
        iconColor="bg-blue-400"
        path="/approverequest"
      />

      <div className={`h-${space}`} />

      <IconLabelButton
        text="TimeLine"
        icon={<AiOutlineHistory />}
        iconColor="bg-yellow-400"
        path="/timeline"
      />

      <div className={`h-${space}`} />

      <IconLabelButton
        text="Teams"
        icon={<RiTeamLine color="#ffffff" />}
        iconColor="bg-purple-400"
        path="/teams"
      />

      <div className={`h-${space}`} />

      <IconLabelButton
        text="Users"
        icon={<AiOutlineUser color="#ffffff" />}
        iconColor="bg-orange-400"
        path="/users"
      />

      <div className={`h-${space}`} />

      <IconLabelButton
        text="Job"
        icon={<TbTie color="#ffffff" />}
        iconColor="bg-gray-400"
        path="/jobs"
      />
    </fieldset>
  );
};

export default MyWorkMenuList;
