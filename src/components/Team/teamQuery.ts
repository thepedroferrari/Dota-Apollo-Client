import { gql } from '@apollo/client';

const TEAM_QUERY = gql`
  query Team($id: Int!) {
    team(id: $id) {
      name
      images {
        default
      }
    }
  }
`;

export default TEAM_QUERY;
