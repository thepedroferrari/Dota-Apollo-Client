import React from 'react';
import { IExtendedPlayer } from '../../interfaces';
import { PlayerCardGrid } from './PlayerCardGrid';
import { getPlayerRole } from '../../utils/getPlayerRole';
import SocialMedia from '../SocialMedia/SocialMedia';

interface Props {
  player: IExtendedPlayer | undefined;
}

const PlayerCard = ({ player }: Props) => {

  if (!player) return null;

  const playerRoles = getPlayerRole(player.roles);

  return (
    <PlayerCardGrid>
      <h2><img src={player.team.images.thumbnail} /> {player.nick_name}</h2>
      <img src={player.images.default} />
      <section>
        <p><strong>Name</strong>: {player.first_name} {player.last_name}</p>
        <p><strong>Country</strong>: {player.country.name}</p>
        <p><strong>Region</strong>: {player.country.region.name}</p>
        <p><strong>Role</strong>: {`${playerRoles[0]}${playerRoles[1] ? ` / ${playerRoles[1]}` : ''}`}</p>
        <p><strong>Social</strong>: <SocialMedia accounts={player.social_media_accounts} /></p>
        <p><strong>Team</strong>: {player.team.name}</p>
        <p><strong>DPC Points</strong>: {player.dpc_points}</p>
      </section>
    </PlayerCardGrid>
  );
};

export default PlayerCard;
