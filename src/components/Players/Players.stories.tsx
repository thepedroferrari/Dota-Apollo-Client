import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import Players from './Players';
import StoriesProvider from '../StoriesProvider/StoriesProvider';

addDecorator((storyFn) => <StoriesProvider>{storyFn()}</StoriesProvider>);

storiesOf('Players', module).add('All Players', () => <Players />);
