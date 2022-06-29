import React, { ReactElement, VFC } from 'react';

type Props = {
  children: ReactElement;
};
const CircleButton: VFC<Props> = (props) => {
  const { children } = props;

  return <button type="button">{children}</button>;
};

export default CircleButton;
