import React, { ReactElement, VFC } from 'react';
import Avatar from 'boring-avatars';

type Props = {
  iconName: string;
  topText: string;
  bottomText: string | ReactElement;
  righetUpText: string;
  rightBottomText: string | ReactElement;
};

const PrimaryListItem: VFC<Props> = (props) => {
  const { iconName, topText, bottomText, righetUpText, rightBottomText } =
    props;
  return (
    <div className="flex border-b-1 px-3 py-1 bg-white">
      <div className="w-1/5 ">
        <Avatar
          size={44}
          name={iconName}
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
      <div className="text-right text-gray-400">
        <div>{righetUpText}</div>
        <div>{rightBottomText}</div>
      </div>
    </div>
  );
};

export default PrimaryListItem;
