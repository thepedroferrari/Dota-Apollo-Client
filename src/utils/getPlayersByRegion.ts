import { IPlayer } from '../interfaces';

interface IPlayersByRegion {
  'East Asia': IPlayer['id'][];
  Europe: IPlayer['id'][];
  'North America': IPlayer['id'][];
  Oceania: IPlayer['id'][];
  'South America': IPlayer['id'][];
  'South East Asia': IPlayer['id'][];
  'Western Asia': IPlayer['id'][];
}

export const getPlayersByRegion = (players: IPlayer[]) => {
  const playerRegions: IPlayersByRegion = {
    'East Asia': [],
    Europe: [],
    'North America': [],
    Oceania: [],
    'South America': [],
    'South East Asia': [],
    'Western Asia': [],
  };

  players.forEach((player) => {
    const region = player.country.region.name;
    playerRegions[region].push(player.id);
  });
  return playerRegions;
};
