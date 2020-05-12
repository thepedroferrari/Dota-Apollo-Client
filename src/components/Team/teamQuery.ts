import { gql } from '@apollo/client';

const TEAM_QUERY = gql`
  query Team($rosterId: Int!) {
    roster(id: $rosterId) {
      dpc_points
      teams {
        id
        name
        images {
          default
        }
      }
    }
  }
`;

export default TEAM_QUERY;