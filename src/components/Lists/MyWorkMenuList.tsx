import React from 'react';
import { AiOutlineHistory, AiOutlineUser } from 'react-icons/ai';
import { BsFillInboxFill } from 'react-icons/bs';
import { GiStamper } from 'react-icons/gi';
import { TbTie } from 'react-icons/tb';
import { RiTeamLine } from 'react-icons/ri';
import IconLabelButton from '../Buttons/IconLabelButton';

const MyWorkMenuList = () => {
  const space = 3;
  return (
    <div className="border-1 p-2 rounded-lg light-color">
      <div className={`h-${space}`} />

      <IconLabelButton
        text="QuestBoard"
        icon={<BsFillInboxFill color="#ffffff" />}
        iconColor="bg-green-500"
        path="/questboard"
      />

      <div className={`h-${space}`} />

      <IconLabelButton
        text="ApproveRequest"
        icon={<GiStamper color="#ffffff" />}
        iconColor="bg-blue-500"
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
        iconColor="bg-purple-500"
        path="/teams"
      />

      <div className={`h-${space}`} />

      <IconLabelButton
        text="Users"
        icon={<AiOutlineUser color="#ffffff" />}
        iconColor="bg-orange-500"
        path="/users"
      />

      <div className={`h-${space}`} />

      <IconLabelButton
        text="Job"
        icon={<TbTie color="#ffffff" />}
        iconColor="bg-gray-500"
        path="/jobs"
      />
    </div>
  );
};

export default MyWorkMenuList;
