import * as React from 'react';

import { useCountdown } from '../../hooks';

interface Props {
  date: number;
  onEnd?: () => void | undefined;
}

const Countdown = React.memo(({ date, onEnd }: Props) => {
  const { timeLeft, gameStarted } = useCountdown(date);
  const { days, hours, minutes, seconds } = timeLeft;

  React.useEffect(() => {
    if (gameStarted && onEnd) {
      onEnd();
    }
  }, [gameStarted, onEnd]);

  return (
    <time>{days}Days, {hours}h {minutes}m {seconds}s</time>
  );
});

export default Countdown;
