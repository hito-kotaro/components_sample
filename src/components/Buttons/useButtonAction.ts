import React from 'react';

const useButtonAction = () => {
  const displayConsole = (path: string) => {
    console.log(`next path=>${path}`);
  };

  const echoConsole = () => {
    console.log('push button');
  };
  return { displayConsole, echoConsole };
};

export default useButtonAction;
