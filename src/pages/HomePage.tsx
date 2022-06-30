import { IconClipboard, IconCopy, IconTrash, Badge } from '@supabase/ui';
import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useButtonAction from '../components/Buttons/useButtonAction';
import UserCard from '../components/Cards/UserCard';
import DropDown from '../components/DropDown/DropDown';
import HomeHeader from '../components/Headers/HomeHeader';
import MyWorkMenuList from '../components/Lists/MyWorkMenuList';
import useSearchForm from '../components/SearchForm/useSearchForm';
import useSelectForm from '../components/SelectForm/useSelectForm';
import { DropDownItem } from '../types/DropDownItemType';
import { primaryListItem } from '../types/ListItemTypes';

const HomePage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('two');

  const onClick = () => {
    navigate('/test');
  };

  const itemList: DropDownItem[] = [
    { icon: <IconClipboard />, onClick, text: 'Duplicate', divider: false },
    { icon: <IconCopy />, onClick, text: 'Copy', divider: false },
    { icon: <IconTrash />, onClick, text: 'Trash', divider: false },
    { icon: <IconClipboard />, onClick, text: 'Logout', divider: true },
  ];

  const selectItemList = [
    { value: '1', itemText: 'member' },
    { value: '2', itemText: 'reader' },
    { value: '3', itemText: 'master' },
  ];

  const primaryListItemList: primaryListItem[] = [
    {
      owner: 'sato_hiroki',
      title: '月報提出',
      description: '翌月第一営業日中に提出',
      date: '2022/6/29',
      point: 1,
    },
    {
      owner: 'sato_hiroki',
      title: '作業報告書提出',
      description: '翌月第一営業日中に提出',
      date: '2022/6/29',
      point: 1,
    },
    {
      owner: 'sato_hiroki',
      title: 'プレゼン実施',
      description: '発電会でプレゼンを行う',
      date: '2022/6/29',
      point: 3,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
  ];

  return (
    <div>
      <div className="sticky top-0 z-50 bg-base drop-shadow-md p-2">
        <div className="flex">
          <div className="text-3xl font-semibold">ホーム</div>
          <div className="ml-auto">
            <DropDown itemList={itemList} />
          </div>
        </div>
      </div>

      <div className="h-6" />
      {/* <h1 className="font-mono text-3xl font-semibold ml-3">ホーム</h1> */}

      <div className="h-5" />
      <div className="w-11/12 mx-auto">
        <UserCard team="luxy" userName="kotaro" />
      </div>

      <div className="h-5" />
      <h1 className="text-2xl font-semibold ml-3">自分の作業</h1>

      <div className="flex justify-center">
        <div className="w-11/12">
          <MyWorkMenuList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
