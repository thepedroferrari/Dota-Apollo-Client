import React from "react";
import { storiesOf } from "@storybook/react";

import Players from './Players';
import StoriesProvider from '../StoriesProvider/StoriesProvider';

storiesOf('Players', module)
  .add('All Players',
    () => <StoriesProvider><Players /></StoriesProvider>
  );
