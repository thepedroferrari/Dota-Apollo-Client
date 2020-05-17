import React from "react";
import { storiesOf } from "@storybook/react";

import SocialMedia from './SocialMedia';

storiesOf('Social Media Accounts', module)
  .add('9pasha',
    () => <SocialMedia accounts={[
      {
        "name": "Twitter",
        "url": "https://twitter.com/9pashka"
      },
      {
        "name": "Twitch",
        "url": "https://www.twitch.tv/9pasha"
      }
    ]
    } />
  )
  .add('zai', () => <SocialMedia accounts={[
    {
      "name": "Twitter",
      "url": "https://twitter.com/zai_2002"
    },
    {
      "name": "Twitch",
      "url": "https://www.twitch.tv/zai"
    }
  ]} />)
  .add('Miracle', () => <SocialMedia accounts={[
    {
      "name": "Twitter",
      "url": "https://twitter.com/Liquid_Miracle"
    },
    {
      "name": "Facebook",
      "url": "https://www.facebook.com/MiracleDotaOfficial"
    },
    {
      "name": "Twitch",
      "url": "https://www.twitch.tv/miracle_doto"
    }
  ]} />)
  ;


