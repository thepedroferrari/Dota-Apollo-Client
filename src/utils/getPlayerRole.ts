import { IPlayer, IPlayerRoleName } from '../interfaces';

export const getPlayerRole = (player: IPlayer): IPlayerRoleName[] => {
  const playerRoles: IPlayerRoleName[] = [];
  const currentRoles = player.roles[0].name.split('/');

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
  currentRoles.forEach(role => roleSwitcheroo(role));

  return playerRoles;
};