import React, { VFC } from 'react';
import CategoryHeader from '../components/Headers/CategoryHeader';
import useSearchForm from '../components/SearchForm/useSearchForm';
import useSelectForm from '../components/SelectForm/useSelectForm';

type Props = {
  title: string;
};

const CategoryPage: VFC<Props> = (props) => {
  const { title } = props;
  const searchHandler = useSearchForm();
  const selectHandler = useSelectForm();
  //   const selectItemList = [
  //     { value: '1', itemText: 'member' },
  //     { value: '2', itemText: 'reader' },
  //     { value: '3', itemText: 'master' },
  //   ];

  const buttonAction = () => {
    console.log('push create button');
  };
  return (
    <div>
      <CategoryHeader
        title={title}
        searchHandler={searchHandler}
        selectHandler={selectHandler}
        onClick={buttonAction}
      />

      <div className="h-3" />
    </div>
  );
};

export default CategoryPage;
