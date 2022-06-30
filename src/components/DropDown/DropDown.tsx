import React, { ReactElement, VFC } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsThreeDots } from 'react-icons/bs';
import { Button, Divider, Dropdown, Typography } from '@supabase/ui';
import { DropDownItem } from '../../types/DropDownItemType';

type Props = {
  itemList: DropDownItem[];
};
const DropDown: VFC<Props> = (props) => {
  const { itemList } = props;
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/test');
  };

  return (
    <Dropdown
      overlay={itemList.map((item: DropDownItem) => (
        <>
          {item.divider ? <Divider light /> : ''}
          <Dropdown.Item icon={item.icon} onClick={item.onClick}>
            <Typography.Text>{item.text}</Typography.Text>
          </Dropdown.Item>
        </>
      ))}
    >
      <Button type="text" icon={<BsThreeDots size={24} className=" forcus:outline-none" />} />
    </Dropdown>
  );
};

export default DropDown;
