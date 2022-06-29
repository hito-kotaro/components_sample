import React, { VFC } from 'react';
import { Select } from '@supabase/ui';
import useSelectForm from './useSelectForm';
import type { SelectItem } from '../../types/SelectItemType';

type Props = {
  selectItemList: SelectItem[];
};
const SelectForm: VFC<Props> = (props) => {
  const { selectItemList } = props;
  const { handleChange } = useSelectForm();

  return (
    <Select
      // label="Select label
      onChange={handleChange}
      className="text-red-700"
    >
      {selectItemList.map((item: SelectItem) => (
        <Select.Option value={item.value}>{item.itemText}</Select.Option>
      ))}
    </Select>
  );
};

export default SelectForm;
