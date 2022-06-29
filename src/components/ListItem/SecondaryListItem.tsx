import Avatar from 'boring-avatars';
import React, { ReactElement, VFC } from 'react';

type Props = {
  userName: string;
  topText: string;
  bottomText: ReactElement;
  rightUpText: string;
};

const SecondaryListItem: VFC<Props> = (props) => {
  const { userName, topText, bottomText, rightUpText } = props;
  return (
    <div className="flex border-b-1 px-3 py-1">
      <div className="w-1/5 ">
        <Avatar
          size={32}
          name={userName}
          variant="beam"
          colors={['#FFBD87', '#FFD791', '#F7E8A6', '#D9E8AE', '#BFE3C0']}
        />
      </div>

      <div className="w-3/5 text-left">
        <div className="text-sm text-gray-500 whitespace-nowrap truncate">
          {topText}
        </div>
        <div className="text-lg  whitespace-nowrap truncate">{bottomText}</div>
      </div>
      <div className="text-right text-gray-400 ml-auto">
        <div>{rightUpText}</div>
      </div>
    </div>
  );
};

export default SecondaryListItem;
