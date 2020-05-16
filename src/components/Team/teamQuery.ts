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
        social_media_accounts {
          name
          url
        }
        country {
          name
          images {
            thumbnail
          }
        }
      }
    	players {
        id
      }
    }
    rosters {
      id
      dpc_points
    }
    eventsByRoster(rosterId: $rosterId) {
      id
      start
      scores
    }
  }
`;

export default TEAM_QUERY;
