import { gql } from '@apollo/client';

export const GET_PLAYER_DATA = gql`
  query getPlayerData($id: Int!) {
    player(id: $id) {
      nick_name
      first_name
      last_name
      images {
        default
      }
      social_media_accounts {
        url
        name
      }
      country {
        name
        images {
          thumbnail
        }
      }
      roles {
        name
        from
      }
    }
  }
`;
