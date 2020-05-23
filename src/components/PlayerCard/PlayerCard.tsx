import React from 'react';
import { IExtendedPlayer } from '../../interfaces';
import { Title } from '../CommonUi';
import { PlayerCardGrid } from './PlayerCardGrid';

interface Props {
  player: IExtendedPlayer | undefined;
}

const PlayerCard = ({ player }: Props) => {

  if (!player) return null;

  return (
    <PlayerCardGrid>
      <Title>{player.nick_name}</Title>
    </PlayerCardGrid>
  );
};

export default PlayerCard;
