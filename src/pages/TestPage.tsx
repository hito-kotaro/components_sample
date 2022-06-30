import { Badge } from '@supabase/ui';
import Avatar from 'boring-avatars';
import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import BackLink from '../components/BackLink';
import UserCard from '../components/Cards/UserCard';
import DropDown from '../components/DropDown/DropDown';
import DetailHeadler from '../components/Headers/DetailHeadler';
import MiniHeader from '../components/Headers/MiniHeader';
import IconLabel from '../components/IconLabel/IconLabel';
import HeaderLink from '../components/Links/HeaderLink';
import MyWorkMenuList from '../components/Lists/MyWorkMenuList';
import MyAvatar from '../components/MyAvatar/MyAvatar';

const TestPage = () => {
  return (
    <div>
      {/* <DetailHeadler itemList={[]} name="kotaro" point={10} headerName="クエスト詳細" open /> */}
      <MiniHeader title="新しいクエストの発行" positiveLinkText="発行" />
      <div className="h-6" />
    </div>
  );
};

export default TestPage;
