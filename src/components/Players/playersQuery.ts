import { gql } from '@apollo/client';

const PLAYERS_QUERY = gql`
  query extendedPlayers {
    extendedPlayers {
      id
      nick_name
      first_name
      last_name
      images {
        thumbnail
        default
      }
      roles {
        name
      }
      country {
        name
        images {
          thumbnail
        }
        region {
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
        }
      }
      rosterId
      dpc_points
    }
  }
`;

export default PLAYERS_QUERY;
