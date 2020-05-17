import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";

import Scoreboard from './Scoreboard';
import StoriesProvider from '../StoriesProvider/StoriesProvider';

addDecorator(storyFn => <StoriesProvider>{storyFn()}</StoriesProvider>);

storiesOf('Scoreboard', module)
  .add('Scoreboard',
    () => <Scoreboard />
  );
