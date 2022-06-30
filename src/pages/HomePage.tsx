import { IconClipboard, IconCopy, IconTrash, Badge } from '@supabase/ui';
import React, { ChangeEvent, useState } from 'react';
import useButtonAction from '../components/Buttons/useButtonAction';
import UserCard from '../components/Cards/UserCard';
import MyWorkMenuList from '../components/Lists/MyWorkMenuList';
import useSearchForm from '../components/SearchForm/useSearchForm';
import useSelectForm from '../components/SelectForm/useSelectForm';
import { DropDownItem } from '../types/DropDownItemType';
import { primaryListItem } from '../types/ListItemTypes';

const HomePage = () => {
  const [value, setValue] = useState('two');
  const onClick = () => {
    console.log('test');
  };

  const itemList: DropDownItem[] = [
    { icon: <IconClipboard />, onClick, text: 'Duplicate', divider: false },
    { icon: <IconCopy />, onClick, text: 'Copy', divider: false },
    { icon: <IconTrash />, onClick, text: 'Trash', divider: false },
    { icon: <IconClipboard />, onClick, text: 'TEST!!', divider: true },
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
      <div className="w-11/12 mx-auto">
        <UserCard team="luxy" userName="kotaro" />
      </div>

      <div className="flex justify-center">
        <div className="w-11/12">
          <MyWorkMenuList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
