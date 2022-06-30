import Avatar from 'boring-avatars';
import React, { VFC } from 'react';

type Props = {
  size: number;
  name: string;
};
const MyAvatar: VFC<Props> = (props) => {
  const { size, name } = props;
  return (
    <div className="rounded-full overflow-hidden">
      <Avatar
        size={size}
        name={name}
        variant="beam"
        colors={['#FFBD87', '#FFD791', '#F7E8A6', '#D9E8AE', '#BFE3C0']}
      />
    </div>
  );
};

export default MyAvatar;
