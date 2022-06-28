/* eslint-disable no-unused-vars */
import React, { ReactElement, VFC } from 'react';

type Props = {
  text: string;
  icon: ReactElement;
  iconColor: string;
};
const IconLabelButton: VFC<Props> = (props) => {
  const { text, icon, iconColor } = props;

  return (
    <button type="button" className="w-full">
      <div className="flex">
        <div className={`${iconColor} h-6 w-6 rounded-lg p-1`}>{icon}</div>
        <div className="border-b-1 w-full text-left ml-2">{text}</div>
      </div>
    </button>
  );
};

export default IconLabelButton;
