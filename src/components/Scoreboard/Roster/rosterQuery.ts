import { gql } from '@apollo/client';

export const GET_ROSTER_DATA = gql`
  query getRosterData($rosterId: Int!) {
    eventsByRoster(rosterId: $rosterId) {
      id
      start
      scores
    }
  }
`;
