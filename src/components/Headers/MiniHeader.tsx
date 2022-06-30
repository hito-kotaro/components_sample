import React, { VFC } from 'react';
import HeaderLink from '../Links/HeaderLink';

type Props = {
  title: string;
  positiveLinkText: string;
};

const MiniHeader: VFC<Props> = (props) => {
  const { title, positiveLinkText } = props;
  return (
    <div className=" lead sticky top-0 z-50 bg-base drop-shadow-md p-2">
      <div className="flex justify-between">
        <HeaderLink to="/questboard" linkText="キャンセル" />
        <HeaderLink to="/questboard" linkText={positiveLinkText} />
      </div>
      <div className="w-full text-center">{title}</div>
    </div>
  );
};

export default MiniHeader;
