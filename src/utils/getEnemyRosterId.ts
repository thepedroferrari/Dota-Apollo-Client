import { IEvent } from '../interfaces';

// getting the ID of whom they played against in this event
export const getEnemyRosterId = (event: IEvent, rosterId: string) => {
  return Object.keys(event.scores).filter((scoreId) => scoreId !== rosterId)[0];
};
