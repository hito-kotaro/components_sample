import React from 'react';
import { useNavigate } from 'react-router-dom';
import { primaryListItem } from '../../types/ListItemTypes';

const useButtonAction = () => {
  const navigate = useNavigate();

  const displayConsole = (path: string) => {
    console.log(`next path=>${path}`);
  };

  const echoConsole = () => {
    console.log('push button');
  };

  const echoPrimaryListItem = (item: primaryListItem) => {
    console.log(item);
  };

  const navigatePage = (path: string) => {
    navigate(path);
  };
  return { displayConsole, echoConsole, echoPrimaryListItem, navigatePage };
};

export default useButtonAction;
