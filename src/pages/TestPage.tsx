import { Badge } from '@supabase/ui';
import Avatar from 'boring-avatars';
import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import BackLink from '../components/BackLink';
import UserCard from '../components/Cards/UserCard';
import DropDown from '../components/DropDown/DropDown';
import DetailHeadler from '../components/Headers/DetailHeadler';
import IconLabel from '../components/IconLabel/IconLabel';
import MyWorkMenuList from '../components/Lists/MyWorkMenuList';
import MyAvatar from '../components/MyAvatar/MyAvatar';

const TestPage = () => {
  return (
    <div>
      <DetailHeadler itemList={[]} name="kotaro" point={10} headerName="クエスト詳細" open />

      <div className="h-6" />
    </div>
  );
};

export default TestPage;
