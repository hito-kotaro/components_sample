import React from 'react';
import CategoryHeader from '../components/Headers/CategoryHeader';
import useSearchForm from '../components/SearchForm/useSearchForm';
import useSelectForm from '../components/SelectForm/useSelectForm';

const SubCategoryPage = () => {
  const searchHandler = useSearchForm();
  const selectHandler = useSelectForm();
  const selectItemList = [
    { value: '1', itemText: 'member' },
    { value: '2', itemText: 'reader' },
    { value: '3', itemText: 'master' },
  ];

  const buttonAction = () => {
    console.log('push create button');
  };
  return (
    <div>
      <CategoryHeader
        title="Quest Board"
        searchHandler={searchHandler}
        selectHandler={selectHandler}
        onClick={buttonAction}
        selectItemList={selectItemList}
      />

      <div className="h-3" />
    </div>
  );
};

export default SubCategoryPage;
