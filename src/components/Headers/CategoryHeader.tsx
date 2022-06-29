import React, { VFC } from 'react';
import { IoIosAdd } from 'react-icons/io';
import BackLink from '../BackLink';
import SearchForm from '../SearchForm/SearchForm';
import SelectForm from '../SelectForm/SelectForm';

type Props = {
  searchHandler: any;
  selectHandler: any;
  onClick: () => void;
  selectItemList?: { value: string; itemText: string }[];
  title: string;
};
const CategoryHeader: VFC<Props> = (props) => {
  const { title, searchHandler, selectHandler, onClick, selectItemList } =
    props;
  return (
    <div className="sticky top-0 z-50 bg-white drop-shadow-md p-2">
      <div className="flex">
        <BackLink to="/component" linkText="ホーム" />
        <div className="ml-auto">
          <button
            onClick={onClick}
            type="button"
            className="border-2 border-link rounded-full"
          >
            <IoIosAdd size={24} color="#4B72E0" />
          </button>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <SearchForm searchHandler={searchHandler} />
        <div className="w-1/3 mt-2 ml-auto">
          {selectItemList ? (
            <SelectForm
              selectItemList={selectItemList}
              selectHandler={selectHandler}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
