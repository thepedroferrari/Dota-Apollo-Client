import React from 'react';
import { storiesOf } from '@storybook/react';

import Countdown from './Countdown';
import { ONE_DAY_MS, ONE_MINUTE_MS } from '../../utils/constants';

storiesOf('Countdown', module)
  .add('My Birthday in 2020', () => (
    <Countdown date={new Date(2020, 11, 30, 21, 50).getTime()} />
  ))
  .add('My Birthday in 2021', () => (
    <Countdown date={new Date(2021, 11, 30, 21, 50).getTime()} />
  ))
  .add('Tomorrow', () => {
    const now = Date.now();
    const tomorrow = now + ONE_DAY_MS;

    return <Countdown date={tomorrow} />;
  })
  .add('In 5 Minutes', () => {
    const now = Date.now();
    const inFiveMinutes = now + ONE_MINUTE_MS * 5;

    return <Countdown date={inFiveMinutes} />;
  })
  .add('In 1 Week', () => {
    const now = Date.now();
    const aWeekFromNow = now + ONE_DAY_MS * 7;

    return <Countdown date={aWeekFromNow} />;
  });
