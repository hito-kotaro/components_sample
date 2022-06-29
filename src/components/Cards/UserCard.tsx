import Avatar from 'boring-avatars';
import React, { VFC } from 'react';
import ScoreLabel from '../Scores/ScoreLabel';

type Props = {
  team: string;
  userName: string;
};

const UserCard: VFC<Props> = (props) => {
  const { team, userName } = props;
  return (
    <div className="border-1 rounded-lg p-2 light-color">
      <div className="flex">
        <Avatar
          size={48}
          name={userName}
          variant="beam"
          colors={['#FFBD87', '#FFD791', '#F7E8A6', '#D9E8AE', '#BFE3C0']}
        />
        <div className="ml-5 leading-12 text-xl">{`${team}/${userName}`}</div>
      </div>
      <div className="h-12" />
      <div className="text-right">
        <ScoreLabel point={10} penalty={20} />
      </div>
    </div>
  );
};

export default UserCard;
