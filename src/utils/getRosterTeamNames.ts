import { IEvent } from '../interfaces';

export const getRosterTeamNames = (event: IEvent, rosterId: string) => {
  // may be undefined in case we pass a wrong RosterId.
  const home = event.rosters
    ? event.rosters.find((roster) => roster.id === rosterId)?.teams[0]
        .short_name
    : '';
  const enemy = event.rosters
    ? event.rosters.find((roster) => roster.id !== rosterId)?.teams[0]
        .short_name
    : '';

  return { home, enemy };
};
