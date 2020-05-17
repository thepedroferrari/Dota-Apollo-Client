import React from 'react';
import { useQuery } from '@apollo/client';
import { IPlayer } from '../../interfaces';
import PLAYERS_QUERY from './playersQuery';
import { getPlayersByRole } from '../../utils/';
import { getPlayersByRegion } from '../../utils/getPlayersByRegion';
import { getPlayerRole } from '../../utils/getPlayerRole';
import { PlayersGrid } from './PlayersGrid';


function Players() {

  const { loading, error, data } = useQuery(PLAYERS_QUERY);
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;
  console.log(data);


  const { players }: { players: IPlayer[]; } = data;


  const playersByRoles = getPlayersByRole(players);
  const playersByRegion = getPlayersByRegion(players);

  console.log(playersByRoles, playersByRegion);
  return (
    <PlayersGrid>
      {players.map(player => {
        const gridArea = (getPlayerRole(player.roles)[0] || '').replace(/ /g, '').toLowerCase();
        const region = player.country.region.name.replace(/ /g, '_').toLowerCase();

        return (
          <div key={player.id} className={region}>
            <img className="picture" src={player.images.default} alt={`Player ${player.nick_name}`} />
            <img className="country" src={player.country.images.thumbnail} alt="" role="presentation" />
            <span>{player.nick_name}</span>
          </div>
        );
      })}
    </PlayersGrid>
  );
}

export default Players;
