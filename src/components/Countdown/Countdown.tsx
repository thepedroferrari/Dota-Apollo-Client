import * as React from 'react';

import { useCountdown } from '../../hooks';
import { CountdownGrid } from './CountdownGrid';

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
    <CountdownGrid>
      <span className="container">
        <span className="time">{days}</span>
        <span className="time-frame">Days</span>
      </span>
      <span className="container">
        <span className="time">{hours}</span>
        <span className="time-frame">Hours</span>
      </span>
      <span className="container">
        <span className="time">{minutes}</span>
        <span className="time-frame">Minutes</span>
      </span>
      <span className="container">
        <span className="time">{seconds}</span>
        <span className="time-frame">Seconds</span>
      </span>
    </CountdownGrid>
  );
});

export default Countdown;
