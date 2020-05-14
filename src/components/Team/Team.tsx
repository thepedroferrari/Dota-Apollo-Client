import React from 'react';
import { RouteChildrenProps } from "react-router-dom";
import { useQuery } from '@apollo/client';

import TEAM_QUERY from './teamQuery';
import { ITeam, IRoster } from '../../interfaces';
import { useMatches } from '../../hooks/useMatches';
import Match from '../Match/Match';
import Player from '../Player';

interface TeamParams {
  id: string;
  rosterId: string;
}

const Team = ({ match }: RouteChildrenProps<TeamParams>) => {
  const rosterId = String(match?.params.rosterId);

  const query = useQuery(TEAM_QUERY, {
    variables: {
      rosterId: Number(rosterId)
    }
  });

  const { loading, error, matches } = useMatches({ query, rosterId });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  const { data } = query;
  const { players, teams } = data.roster as IRoster;

  const team: ITeam = teams[0];

  // need another query (eventsbyroster) to get the event id of the prev/fut events to display bellow
  // need to get player id/name to load the player card
  return (
    <div>
      <h1>{team.name}</h1>
      <span>Points: {data.roster.dpc_points}</span>
      <img alt={`Logo for the dota2 team ${team.name}`} src={team.images.default} />
      <section>
        {players.map(player => <Player key={player.id} playerId={player.id} />)}
      </section>
      <section>
        <h2>Past results</h2>
        {matches?.past.map(eventId => (
          <Match eventId={eventId} rosterId={rosterId} key={eventId} />
        ))}
        <h2>Upcoming Matches</h2>
        {
          // Future matches call a Countdown component, each countdown starts a timeout.
          // if we have a heavy load and too many countdowns start at the same time
          // we might see the second going down at a slightly pace. For most cases
          // this is fine but if we wanted to make it better we could have one countdown
          // state and subscribe every child to the same state to be updated by the
          // timeout.
          matches?.future.map(eventId => (
            <Match eventId={eventId} rosterId={rosterId} key={eventId} future />
          ))}
      </section>
    </div>
  );
};

export default Team;
