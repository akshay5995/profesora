import * as React from 'react';
import { format } from 'date-fns';

const TimeStamp = ({ timestamp }: { timestamp: string }) => {
  const time = format(new Date(timestamp), 'HH:mm:ss');
  return <span className="timestamp">{time}</span>;
};

export default TimeStamp;
