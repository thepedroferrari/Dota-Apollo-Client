import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';

import TEAMS_QUERY from './TeamsQuery';
import { ITeam } from '../../interfaces';

const Teams: React.FC<{}> = (props) => {
  const { loading, error, data } = useQuery(TEAMS_QUERY);
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  const { teams } = data;
  return (
    <div>
      <h1>ALL TEAMS</h1>
      <ul>
        {teams.map((team: ITeam) => (
          <li>
            <Link key={team.id} to={`/team/${team.id}`}>
              {team.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
