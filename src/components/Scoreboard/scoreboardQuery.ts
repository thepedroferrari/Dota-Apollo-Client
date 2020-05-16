import { gql } from '@apollo/client';

export const GET_SCOREBOARD_DATA = gql`
  query scoreBoardData {
    rosters {
      id
      dpc_points
      teams {
        name
        short_name
        images {
          thumbnail
        }
      }
    }
  }
`;
