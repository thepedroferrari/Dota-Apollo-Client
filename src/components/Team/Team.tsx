import React from 'react';
import { Link, RouteChildrenProps } from "react-router-dom";
import { useQuery } from '@apollo/client';

import TEAM_QUERY from './teamQuery';
import { ITeam, TParams } from '../../interfaces';

const Team = ({ match }: RouteChildrenProps<TParams>) => {
  const teamID = Number(match?.params.id);

  console.log({ teamID });
  const { loading, error, data } = useQuery(TEAM_QUERY, {
    variables: {
      id: teamID
    }
  });

  if (loading) return <h1>Loading</h1>;
  if (error) { console.log(error); return <h1>Error</h1>; };

  const { team }: { team: ITeam[]; } = data;
  return (
    <div>
      <h1>{team[0].name}</h1>
      <img alt={`Logo for the dota2 team ${team[0].name}`} src={team[0].images.default} />
    </div>
  );
};

export default Team;
