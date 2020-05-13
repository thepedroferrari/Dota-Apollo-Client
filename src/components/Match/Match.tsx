import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MATCH_DATA } from './matchQuery';
import { getEnemyRosterId } from '../../utils/getEnemyRosterId';
import { IEvent } from '../../interfaces';
import { getRosterTeamNames } from '../../utils/getRosterTeamNames';
import { useCountdown } from '../../hooks/useCountdown';

interface Props {
  eventId: number;
  future?: boolean;
  rosterId: string;
}

interface IPastMatch {
  event: IEvent;
  rosterId: string;
}

interface IFutureMatch {
  start: number;
}


const Match = ({ eventId, rosterId, future }: Props) => {
  const { loading, error, data } = useQuery(GET_MATCH_DATA, {
    variables: { id: eventId }
  });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  const { event } = data;

  return (
    <section>
      <header>{event.tournament_name}</header>
      <small>best of {event.bestOf}</small>
      {future ? (
        <FutureMatch start={event.start} />
      ) : (
          <PastMatch event={event} rosterId={rosterId} />
        )}
    </section>
  );
};

const PastMatch = ({ event, rosterId }: IPastMatch) => {
  const enemyRosterId = getEnemyRosterId(event, rosterId);
  const { home, enemy } = getRosterTeamNames(event, rosterId);

  return (
    <div>
      {home}: [{event.scores[rosterId]}] | [{event.scores[enemyRosterId]}] {enemy}
    </div>
  );
};

const FutureMatch = ({ start }: IFutureMatch) => {
  const { timeLeft } = useCountdown(start);
  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      <p>The match will start in</p>
      <time>{days}Days, {hours}h {minutes}m {seconds}s</time>
    </div>
  );
};

export default Match;
