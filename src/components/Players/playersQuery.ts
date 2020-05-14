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
    }
  }
`;

export default PLAYERS_QUERY;



