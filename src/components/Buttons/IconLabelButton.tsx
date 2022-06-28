/* eslint-disable no-unused-vars */
import React, { ReactElement, VFC } from 'react';
import useButtonAction from './useButtonAction';

type Props = {
  text: string;
  icon: ReactElement;
  iconColor: string;
  path: string;
};

const IconLabelButton: VFC<Props> = (props) => {
  const { text, icon, iconColor, path } = props;
  const { displayConsole } = useButtonAction();

  return (
    <button
      type="button"
      className="w-full"
      onClick={() => displayConsole(path)}
    >
      <div className="flex">
        <div className={`${iconColor} h-8 w-8 rounded-lg p-2`}>{icon}</div>
        <div className="border-b-1 w-full text-left ml-2">{text}</div>
      </div>
    </button>
  );
};

export default IconLabelButton;
