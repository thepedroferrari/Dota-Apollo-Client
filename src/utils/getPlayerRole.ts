import { IPlayer, TPlayerRoleName } from '../interfaces';

export const getPlayerRole = (roles: IPlayer['roles']): TPlayerRoleName[] => {
  const playerRoles: TPlayerRoleName[] = [];
  const currentRole = roles[0]; // may be a string of one or multiple numbers separated by /
  if (!currentRole) return [];

  const currentRoles = currentRole.name.split('/');

  const roleSwitcheroo = (role: string) => {
    switch (role) {
      case '1':
        playerRoles.push('Hard Carry');
        break;
      case '2':
        playerRoles.push('Mid');
        break;
      case '3':
        playerRoles.push('Off-lane');
        break;
      case '4':
        playerRoles.push('Support');
        break;
      case '5':
        playerRoles.push('Hard Support');
        break;

      default:
        break;
    }
  };
  currentRoles && currentRoles.forEach((role) => roleSwitcheroo(role));

  return playerRoles;
};
