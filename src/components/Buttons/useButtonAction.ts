import React from 'react';

const useButtonAction = () => {
  const displayConsole = (path:string) => {
    console.log(`next path=>${path}`);
  };

  return { displayConsole };
};

export default useButtonAction;
