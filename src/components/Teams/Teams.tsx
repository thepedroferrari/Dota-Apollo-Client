import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import GET_TEAMS from './getTeams';
import { ITeam } from '../../interfaces';

const Teams: React.FC = () => {
  const { loading, error, data } = useQuery(GET_TEAMS);
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  const { teams }: { teams: ITeam[] } = data;
  return (
    <>
      <h1>ALL TEAMS</h1>
      <div className="grid">
        {teams.map((team) => (
          <div key={team.id}>
            <Link to={`/team/${team.id}`}>{team.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Teams;
