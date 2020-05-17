import React from "react";
import { storiesOf } from "@storybook/react";

import SocialMedia from './SocialMedia';

storiesOf('Social Media Accounts', module)
  .add('9pasha',
    () => <SocialMedia accounts={[
      {
        "name": "Twitter",
        "slug": 'twitter',
        "url": "https://twitter.com/9pashka"
      },
      {
        "name": "Twitch",
        "slug": 'twitch',
        "url": "https://www.twitch.tv/9pasha"
      }
    ]
    } />
  )
  .add('zai', () => <SocialMedia accounts={[
    {
      "name": "Twitter",
      "slug": 'twitter',
      "url": "https://twitter.com/zai_2002"
    },
    {
      "name": "Twitch",
      "slug": 'twitch',
      "url": "https://www.twitch.tv/zai"
    }
  ]} />)
  .add('Miracle', () => <SocialMedia accounts={[
    {
      "name": "Twitter",
      "slug": 'twitter',
      "url": "https://twitter.com/Liquid_Miracle"
    },
    {
      "name": "Facebook",
      "slug": 'facebook',
      "url": "https://www.facebook.com/MiracleDotaOfficial"
    },
    {
      "name": "Twitch",
      "slug": 'twitch',
      "url": "https://www.twitch.tv/miracle_doto"
    }
  ]} />);
