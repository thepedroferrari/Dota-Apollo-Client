import { gql } from '@apollo/client';

export const GET_ROSTER_DATA = gql`
  query getRosterData($rosterId: Int!) {
    eventsByRoster(rosterID: $rosterId) {
      scores
      seeding
      rosters {
        dpc_points
        teams {
          name
          images {
            thumbnail
          }
        }
      }
    }
  }
`;
