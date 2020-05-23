import { IExtendedPlayer, IPlayersByRole } from '../interfaces';
import { getPlayerRole } from './getPlayerRole';

export const getPlayersByRole = (players: IExtendedPlayer[]): IPlayersByRole => {
  const playerRoles: IPlayersByRole = {
    'Hard Carry': [],
    Mid: [],
    'Off-lane': [],
    Support: [],
    'Hard Support': [],
  };
  players.forEach((player) => {
    const roles = getPlayerRole(player.roles);
    if (!roles) return;

    // could also do roles[0] and get just the first of them all.
    roles.forEach((role) => playerRoles[role].push(player));
  });

  return playerRoles;
};
