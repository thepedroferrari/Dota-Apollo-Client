import * as React from 'react';

import { useCountdown } from '../../hooks';

interface Props {
  date: number;
  onEnd?: () => void | undefined;
}

const Countdown = React.memo(({ date, onEnd }: Props) => {
  const { timeLeft, gameStarted } = useCountdown(date);

  React.useEffect(() => {
    if (gameStarted && onEnd) {
      onEnd();
    }
  }, []);

  return (
    <time>
      <div>
        {timeLeft.days}
        <span>days</span>
      </div>
      <div>
        {timeLeft.hours}
        <span>hours</span>
      </div>
      <div>
        {timeLeft.minutes}
        <span>minutes</span>
      </div>
      <div>
        {timeLeft.seconds}
        <span>seconds</span>
      </div>
    </time>
  );
});

export default Countdown;
