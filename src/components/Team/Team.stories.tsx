import React from 'react';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';

import { storiesOf, addDecorator } from '@storybook/react';

import Team from './Team';
import StoriesProvider from '../StoriesProvider/StoriesProvider';

const history = createMemoryHistory();
const path = `/team/:rosterId`;

addDecorator((storyFn) => <StoriesProvider>{storyFn()}</StoriesProvider>);

storiesOf('Team', module)
  .add('Virtus.pro', () => {
    const matchRoute: match<{ rosterId: string }> = {
      isExact: false,
      path,
      url: path.replace(':rosterId', '33618'),
      params: { rosterId: '33618' },
    };

    const location = createLocation(matchRoute.url);
    return <Team history={history} location={location} match={matchRoute} />;
  })
  .add('PSG.LGD', () => {
    const matchRoute: match<{ rosterId: string }> = {
      isExact: false,
      path,
      url: path.replace(':rosterId', '32674'),
      params: { rosterId: '32674' },
    };

    const location = createLocation(matchRoute.url);
    return <Team history={history} location={location} match={matchRoute} />;
  })
  .add('The Alliance', () => {
    const matchRoute: match<{ rosterId: string }> = {
      isExact: false,
      path,
      url: path.replace(':rosterId', '38228'),
      params: { rosterId: '38228' },
    };

    const location = createLocation(matchRoute.url);
    return <Team history={history} location={location} match={matchRoute} />;
  })
  .add('TnC Predator', () => {
    const matchRoute: match<{ rosterId: string }> = {
      isExact: false,
      path,
      url: path.replace(':rosterId', '45953'),
      params: { rosterId: '45953' },
    };

    const location = createLocation(matchRoute.url);
    return <Team history={history} location={location} match={matchRoute} />;
  });
