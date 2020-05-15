import { gql } from '@apollo/client';

export const GET_MATCH_DATA = gql`
  query getMatchData($id: Int!) {
    event(id: $id) {
      start
      bestOf
      tournament_name
      scores
      rosters {
        id
        teams {
          name
        }
      }
    }
  }
`;
