/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { IconClipboard, IconCopy, IconTrash } from '@supabase/ui';
import MyWorkMenuList from './components/Lists/MyWorkMenuList';
import DropDown from './components/DropDown/DropDown';
import { DropDownItem } from './types/DropDownItemType';

const App = () => {
  const onClick = () => {
    console.log('test');
  };

  const itemList: DropDownItem[] = [
    { icon: <IconClipboard />, onClick, text: 'Duplicate', divider: false },
    { icon: <IconCopy />, onClick, text: 'Copy', divider: false },
    { icon: <IconTrash />, onClick, text: 'Trash', divider: false },
    { icon: <IconClipboard />, onClick, text: 'TEST!!', divider: true },
  ];
  return (
    <div>
      <h1 className="text-2xl">IconLabelButton & List Frame</h1>
      <div className="flex justify-center">
        <div className="w-11/12">
          <MyWorkMenuList />
        </div>
      </div>

      <h1 className="text-2xl">DropDownMenuButton</h1>
      <div className="ml-auto bg-red-50 text-right pr-5">
        <DropDown itemList={itemList} />
      </div>
    </div>
  );
};

export default App;
