import React from 'react';
import { primaryListItem } from '../../types/ListItemTypes';

const useButtonAction = () => {
  const displayConsole = (path: string) => {
    console.log(`next path=>${path}`);
  };

  const echoConsole = () => {
    console.log('push button');
  };

  const echoPrimaryListItem = (item: primaryListItem) => {
    console.log(item);
  };
  return { displayConsole, echoConsole, echoPrimaryListItem };
};

export default useButtonAction;
