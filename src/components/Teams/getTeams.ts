import { gql } from '@apollo/client';

const GET_TEAMS = gql`
  query teams {
    teams {
      id
      name
    }
  }
`;

export default GET_TEAMS;
