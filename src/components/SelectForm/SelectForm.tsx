import React, { VFC } from 'react';
import { Select } from '@supabase/ui';
import useSelectForm from './useSelectForm';
import type { SelectItem } from '../../types/SelectItemType';

type Props = {
  selectItemList: SelectItem[];
};
const SelectForm: VFC<Props> = (props) => {
  const { selectItemList } = props;
  const { value, handleChange } = useSelectForm();
  console.log(value);
  return (
    <Select label="Select label" onChange={handleChange}>
      {selectItemList.map((item: SelectItem) => (
        <Select.Option value={item.value}>{item.itemText}</Select.Option>
      ))}
    </Select>
  );
};

export default SelectForm;
