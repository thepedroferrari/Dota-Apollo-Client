import React from 'react';
import { Link, RouteChildrenProps } from "react-router-dom";
import { useQuery } from '@apollo/client';

import TEAM_QUERY from './teamQuery';
import { ITeam } from '../../interfaces';

interface TeamParams {
  id: string;
  rosterId: string;
}

const Team = ({ match }: RouteChildrenProps<TeamParams>) => {
  const rosterId = Number(match?.params.rosterId);

  const { loading, error, data } = useQuery(TEAM_QUERY, {
    variables: {
      rosterId
    }
  });


  console.log({ rosterId, data });

  if (loading) return <h1>Loading</h1>;
  if (error) { console.log(error); return <h1>Error</h1>; };

  const team: ITeam = data.roster.teams[0];
  return (
    <div>
      <h1>{team.name}</h1>
      <img alt={`Logo for the dota2 team ${team.name}`} src={team.images.default} />
    </div>
  );
};

export default Team;
