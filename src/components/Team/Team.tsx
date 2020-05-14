import React from 'react';
import { Link, RouteChildrenProps } from "react-router-dom";
import { useQuery } from '@apollo/client';

import TEAM_QUERY from './teamQuery';
import { ITeam } from '../../interfaces';
import { useMatches } from '../../hooks/useMatches';
import Match from '../Match/Match';

interface TeamParams {
  id: string;
  rosterId: string;
}

const Team = ({ match }: RouteChildrenProps<TeamParams>) => {
  const rosterId = Number(match?.params.rosterId);

  const query = useQuery(TEAM_QUERY, {
    variables: {
      rosterId
    }
  });

  const { loading, error, matches } = useMatches({ query, rosterId: String(rosterId) });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;
  console.log(matches);

  const { data } = query;

  const team: ITeam = data.roster.teams[0];

  // need another query (eventsbyroster) to get the event id of the prev/fut events to display bellow
  // need to get player id/name to load the player card
  return (
    <div>
      <h1>{team.name}</h1>
      <img alt={`Logo for the dota2 team ${team.name}`} src={team.images.default} />
      {matches?.past.map(eventId => (
        <Match eventId={eventId} rosterId={String(rosterId)} key={eventId} />
      ))}

      {matches?.future.map(eventId => (
        <Match eventId={eventId} rosterId={String(rosterId)} key={eventId} future />
      ))}
    </div>
  );
};

export default Team;
