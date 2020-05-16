import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MATCH_DATA } from './matchQuery';
import { getEnemyRosterId } from '../../utils/getEnemyRosterId';
import { IEvent } from '../../interfaces';
import { getRosterTeamNames } from '../../utils/getRosterTeamNames';
import Countdown from '../Countdown/Countdown';
import { PastMatchGrid } from './PastMatchGrid';

interface Props {
  eventId: IEvent['id'];
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
    variables: { id: Number(eventId) }
  });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  const { event } = data;

  return (
    <section>
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
    <PastMatchGrid>
      <span>{home}</span>
      <span>{event.scores[rosterId]}</span>
      <span>{event.scores[enemyRosterId]}</span>
      <span>{enemy}</span>
    </PastMatchGrid>
  );
};

const FutureMatch = ({ start }: IFutureMatch) => {

  return (
    <div>
      <p>The match will start in</p>
      <Countdown date={start} />
    </div>
  );
};

export default Match;
