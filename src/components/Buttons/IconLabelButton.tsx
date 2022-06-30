/* eslint-disable no-unused-vars */
import React, { ReactElement, VFC } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import useButtonAction from './useButtonAction';

type Props = {
  text: string;
  icon: ReactElement;
  iconColor: string;
  path: string;
};

const IconLabelButton: VFC<Props> = (props) => {
  const { text, icon, iconColor, path } = props;
  const { displayConsole, navigatePage } = useButtonAction();

  return (
    <button type="button" className="w-full" onClick={() => navigatePage(path)}>
      <div className="flex">
        <div className={`${iconColor} rounded-lg p-2`}>{icon}</div>
        <div className="border-b-1 w-full ml-2 flex">
          {text}
          <div className="ml-auto p-2">
            <IoIosArrowForward color="#BFBFBF" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default IconLabelButton;
