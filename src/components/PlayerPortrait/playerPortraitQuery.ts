import { gql } from '@apollo/client';

export const GET_PLAYER_DATA = gql`
  query getPlayerData($id: Int!) {
    player(id: $id) {
      nick_name
      images {
        default
      }
      country {
        images {
          thumbnail
        }
      }
    }
  }
`;
