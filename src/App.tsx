/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, useState } from 'react';
import { IconClipboard, IconCopy, IconTrash, Badge } from '@supabase/ui';
import MyWorkMenuList from './components/Lists/MyWorkMenuList';
import DropDown from './components/DropDown/DropDown';
import { DropDownItem } from './types/DropDownItemType';
import SelectForm from './components/SelectForm/SelectForm';
import PrimaryButton from './components/Buttons/PrimaryButton';
import PrimaryListItem from './components/ListItem/PrimaryListItem';
import useButtonAction from './components/Buttons/useButtonAction';
import type { primaryListItem } from './types/ListItemTypes';

const App = () => {
  const [value, setValue] = useState('two');
  const { echoConsole, echoPrimaryListItem } = useButtonAction();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
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
      <h1 className="text-2xl">IconLabelButton & List Frame</h1>
      <div className="flex justify-center">
        <div className="w-11/12">
          <MyWorkMenuList />
        </div>
      </div>

      <hr className="my-5 border-1 border-black" />

      <h1 className="text-2xl">DropDownMenuButton</h1>
      <div className="ml-auto text-right pr-5">
        <DropDown itemList={itemList} />
      </div>

      <hr className="my-5 border-1 border-black" />
      <h1 className="text-2xl">Select</h1>
      <SelectForm selectItemList={selectItemList} />

      <hr className="my-5 border-1 border-black" />

      <h1 className="text-2xl">PrimaryButton</h1>
      <div className="w-11/12 mx-auto">
        <PrimaryButton color="bg-green-400" onClick={echoConsole}>
          primary
        </PrimaryButton>
      </div>

      <hr className="my-5 border-1 border-black" />
      <h1 className="text-2xl">PrimaryListItem</h1>
      {primaryListItemList.map((item: primaryListItem) => (
        <button
          type="button"
          className="w-full"
          onClick={() => echoPrimaryListItem(item)}
        >
          <PrimaryListItem
            owner={item.owner}
            title={item.title}
            description={item.description}
            date={item.date}
            point={item.point}
          />
        </button>
      ))}
    </div>
  );
};

export default App;
