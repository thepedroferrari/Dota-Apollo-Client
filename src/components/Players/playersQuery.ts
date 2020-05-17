import { gql } from '@apollo/client';

const PLAYERS_QUERY = gql`
  query players {
    players {
      id
      nick_name
      images {
        thumbnail
        default
      }
      roles {
        name
      }
      country {
        images {
          thumbnail
        }
        region {
          id
          name
        }
      }
      social_media_accounts {
        name
        url
      }
    }
  }
`;

export default PLAYERS_QUERY;
