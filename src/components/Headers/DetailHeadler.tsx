import { Badge } from '@supabase/ui';
import React, { VFC } from 'react';
import { DropDownItem } from '../../types/DropDownItemType';
import BackLink from '../BackLink';
import DropDown from '../DropDown/DropDown';
import IconLabel from '../IconLabel/IconLabel';
import HeaderLink from '../Links/HeaderLink';

type Props = {
  itemList: DropDownItem[];
  name: string;
  point: number;
  headerName: string;
  open: boolean;
};
const DetailHeadler: VFC<Props> = (props) => {
  const { itemList, name, point, open, headerName } = props;
  return (
    <div className=" lead sticky top-0 z-50 bg-base drop-shadow-md p-2">
      <div className="flex ">
        <HeaderLink to="/" linkText="" backIcon />
        <div className="w-full text-center leading-8">{headerName}</div>
        <div className="ml-auto">
          <DropDown itemList={itemList} />
        </div>
      </div>

      <div className="h-3" />
      <div className="flex">
        <IconLabel size="small" name={name} />
        <div className="ml-auto text-gray-400">2022/12/31</div>
      </div>
      <div className="h-3" />
      <h2 className="text-2xl font-medium">Title</h2>
      <div className="h-3" />
      <div className="flex">
        <Badge color="green" size="large">
          {`${point}point`}
        </Badge>
        <Badge color="green" size="large">
          {open ? 'Open' : 'Close'}
        </Badge>
      </div>
    </div>
  );
};

export default DetailHeadler;
