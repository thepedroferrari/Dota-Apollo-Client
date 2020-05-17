import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";

import Roster from './Roster';
import StoriesProvider from '../../StoriesProvider/StoriesProvider';

addDecorator(storyFn => <StoriesProvider>{storyFn()}</StoriesProvider>);

storiesOf('Roster', module)
  .add('Pedro',
    () => (
      <Roster
        dpc={50000}
        name={'Pedro'}
        logo={'https://media-exp1.licdn.com/dms/image/C5603AQHWxHOfhg__Ag/profile-displayphoto-shrink_100_100/0?e=1595462400&v=beta&t=5B-v3OySyQ_5hqIb42UdK8p8myhlNRQ6eIMWl1Kn8Dg'}
        position={0}
        rosterId={'42819'}
      />)
  );
