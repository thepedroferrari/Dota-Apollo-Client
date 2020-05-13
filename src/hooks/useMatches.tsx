import { ITeamMatches, IEvent } from '../interfaces';
import { ApolloError } from '@apollo/client';
import { getEnemyRosterId } from '../utils/getEnemyRosterId';

interface IData {
  eventsByRoster: IEvent[];
}

interface IQuery {
  loading: boolean,
  error?: ApolloError,
  data: IData;
}

interface Props {
  rosterId: string;
  query: IQuery;
}

export function useMatches({ query, rosterId }: Props) {
  const { loading, error, data } = query;

  if (loading || error) {
    return {
      loading,
      error
    };
  }

  const now = Date.now();
  const matches: ITeamMatches = {
    past: [],
    future: [],
    played: 0,
    won: 0,
    lost: 0
  };
  const { eventsByRoster } = data;

  // checking every score in the events this roster participated
  eventsByRoster.forEach((event: IEvent) => {
    // Did this already happen or is it in the future?
    if (event.start > now) {
      matches.future.push(event.id);
      return;
    };
    matches.past.push(event.id);

    // getting the ID of whom they played against in this event
    const enemyRosterId = getEnemyRosterId(event, rosterId);

    // checking the scores object directly if their roster won or lost the match
    // -- "the aggregated score of the Matches determine the winner."
    // @https://docs.abiosgaming.com/docs/series-matches
    // There is no winner in the data provided so we're calculating via scores
    if (event.scores[rosterId] > event.scores[enemyRosterId]) {
      ++matches.won;
    } else {
      ++matches.lost;
    }
    ++matches.played;
  });

  return { matches };
}
