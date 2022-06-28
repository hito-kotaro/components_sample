/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, useState } from 'react';
import { IconClipboard, IconCopy, IconTrash, Badge } from '@supabase/ui';
import MyWorkMenuList from './components/Lists/MyWorkMenuList';
import DropDown from './components/DropDown/DropDown';
import { DropDownItem } from './types/DropDownItemType';
import SelectForm from './components/SelectForm/SelectForm';
import PrimaryButton from './components/Buttons/PrimaryButton';
import useButtonAction from './components/Buttons/useButtonAction';

const App = () => {
  const [value, setValue] = useState('two');
  const { echoConsole } = useButtonAction();

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

      {/* <hr className="my-5 border-1 border-black" />
      <h1 className="text-2xl">Badges</h1>
      <div>
        <Badge color="blue">blue</Badge>
        <Badge color="gray">gray</Badge>
        <Badge color="green">green</Badge>
        <Badge color="indigo">indigo</Badge>
        <Badge color="pink">pink</Badge>
        <Badge color="purple">purple</Badge>
        <Badge color="red">red</Badge>
        <Badge color="yellow">yellow</Badge>

        <Badge size="large">large</Badge>
        <Badge size="small">small</Badge>
      </div> */}

      <hr className="my-5 border-1 border-black" />

      <h1 className="text-2xl">PrimaryButton</h1>
      <div className="w-11/12 mx-auto">
        <PrimaryButton color="bg-green-400" onClick={echoConsole}>
          primary
        </PrimaryButton>
      </div>
    </div>
  );
};

export default App;
