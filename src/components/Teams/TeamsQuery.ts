import { gql } from '@apollo/client';

const TEAMS_QUERY = gql`
  query teams {
    teams {
      id
      name
    }
  }
`;

export default TEAMS_QUERY;
