import { Badge } from '@supabase/ui';
import React, { VFC } from 'react';

type Props = {
  point: number;
  penalty: number;
};
const ScoreLabel: VFC<Props> = (props) => {
  const { point, penalty } = props;
  return (
    <div>
      <Badge color="green" size="large">
        {`point:${point}`}
      </Badge>
      <Badge color="red" size="large">
        {`penalty:${penalty}`}
      </Badge>
      <Badge color="indigo" size="large">
        {`total:${point - penalty}`}
      </Badge>
    </div>
  );
};

export default ScoreLabel;
