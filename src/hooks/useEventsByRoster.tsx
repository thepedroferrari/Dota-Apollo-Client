import { ITeamMatches, IEvent, IRoster, TQualified } from '../interfaces';

interface IData {
  eventsByRoster: IEvent[];
}

interface IQuery {
  loading: boolean,
  error?: any,
  data: IData;
}

interface Props {
  position?: number;
  rosterId: string;
  query: IQuery;
}

const DCP_TO_QUALIFY = 3690;
const NUMBER_OF_TEAMS_TO_QUALIFY = 12;

export function useEventsByRoster({ query, position, rosterId }: Props) {
  const { loading, error, data } = query;

  if (loading || error) {
    return {
      loading,
      error
    };
  }

  const matches: ITeamMatches = {
    played: 0,
    won: 0,
    lost: 0
  };
  const { eventsByRoster } = data;
  const firstRoster = eventsByRoster[0].rosters;
  const roster: IRoster = firstRoster[0].id === rosterId
    ? firstRoster[0]
    : firstRoster[1];

  const { dpc_points } = roster;
  const teamName = roster.teams[0].name;
  const logoUrl = roster.teams[0].images.thumbnail;
  const status: TQualified = dpc_points > DCP_TO_QUALIFY
    ? 'Invited'
    : position && position <= NUMBER_OF_TEAMS_TO_QUALIFY
      ? 'Qualified'
      : 'Not Qualified';

  // checking every score in the events this roster participated
  eventsByRoster.forEach((event: IEvent) => {
    // getting the ID of whom they played against in this event
    const enemyRosterId = Object.keys(event.scores)
      .filter(scoreId => scoreId !== rosterId)[0];

    // checking the scores object directly if their roster won or lost the match
    if (event.scores[rosterId] > event.scores[enemyRosterId]) {
      ++matches.won;
    } else {
      ++matches.lost;
    }
    ++matches.played;
  });

  return { matches, teamName, logoUrl, status, dpc_points };
}
