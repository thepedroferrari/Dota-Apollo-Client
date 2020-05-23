import { gql } from '@apollo/client';

const PLAYERS_QUERY = gql`
  query extendedPlayers {
    extendedPlayers {
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
      team {
        name
        images {
          thumbnail
          default
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
      rosterId
      dpc_points
    }
  }
`;

export default PLAYERS_QUERY;
