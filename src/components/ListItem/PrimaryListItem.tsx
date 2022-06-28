import React, { VFC } from 'react';
import Avatar from 'boring-avatars';

type Props = {
  owner: string;
  title: string;
  description: string;
  date: string;
  point: number;
};

const PrimaryListItem: VFC<Props> = (props) => {
  const { owner, title, description, date, point } = props;
  return (
    <div className="flex border-b-1 px-3 py-1">
      <div className="w-1/5 ">
        <Avatar
          size={44}
          name=""
          variant="beam"
          colors={['#FFBD87', '#FFD791', '#F7E8A6', '#D9E8AE', '#BFE3C0']}
        />
      </div>

      <div className="w-3/5">
        <div className="text-sm text-gray-500 whitespace-nowrap truncate">
          {owner}/{title}
        </div>
        <div className="text-lg  whitespace-nowrap truncate">{description}</div>
      </div>
      <div className="text-right text-gray-400">
        <div>{date}</div>
        <div>{point}point</div>
      </div>
    </div>
  );
};

export default PrimaryListItem;
