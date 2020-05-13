import { useEffect, useState } from 'react';

interface Timeleft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (date: number): Timeleft => {
  const difference = +new Date(date) - +new Date();
  let timeLeft: Timeleft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

export function useCountdown(date: number) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(date));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(getTimeLeft(date));
    }, 1000);
  });

  const gameStarted =
    timeLeft.days <= 0 &&
    timeLeft.hours <= 0 &&
    timeLeft.minutes <= 0 &&
    timeLeft.seconds <= 0;

  return { timeLeft, gameStarted };
}
