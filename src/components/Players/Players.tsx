import React from 'react';
import { useQuery } from '@apollo/client';
import { IPlayer, IPlayersByRole } from '../../interfaces';
import PLAYERS_QUERY from './playersQuery';
import { getPlayersByRole } from '../../utils/';
import { getPlayersByRegion } from '../../utils/getPlayersByRegion';
import { PlayersGrid } from './PlayersGrid';
import PlayerPortrait from '../PlayerPortrait/PlayerPortrait';

function Players() {
  const { loading, error, data } = useQuery(PLAYERS_QUERY);
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  const { players }: { players: IPlayer[]; } = data;

  const playersByRoles = getPlayersByRole(players);
  const playersByRegion = getPlayersByRegion(players);

  console.log(playersByRoles);




  return (
    <PlayersGrid>
      <h2>Hard Carry</h2>
      <div className="role hardCarry">
        {playersByRoles['Hard Carry'].map((player) => (
          <PlayerPortrait
            key={player.id}
            nickName={player.nick_name}
            regionName={player.country.region.name}
            playerImage={player.images.default}
            countryImage={player.country.images.thumbnail}
          />
        ))
        }
      </div>
      <h2>Mid</h2>
      <div className="role mid">
        {playersByRoles.Mid.map((player) => (
          <PlayerPortrait
            key={player.id}
            nickName={player.nick_name}
            regionName={player.country.region.name}
            playerImage={player.images.default}
            countryImage={player.country.images.thumbnail}
          />
        ))
        }
      </div>
      <h2>Off Lane</h2>
      <div className="role offLane">
        {playersByRoles['Off-lane'].map((player) => (
          <PlayerPortrait
            key={player.id}
            nickName={player.nick_name}
            regionName={player.country.region.name}
            playerImage={player.images.default}
            countryImage={player.country.images.thumbnail}
          />
        ))
        }
      </div>
      <h2>Support</h2>
      <div className="role support">
        {playersByRoles.Support.map((player) => (
          <PlayerPortrait
            key={player.id}
            nickName={player.nick_name}
            regionName={player.country.region.name}
            playerImage={player.images.default}
            countryImage={player.country.images.thumbnail}
          />
        ))
        }
      </div>
      <h2>Hard Support</h2>
      <div className="role hardSupport">
        {playersByRoles['Hard Support'].map((player) => (
          <PlayerPortrait
            key={player.id}
            nickName={player.nick_name}
            regionName={player.country.region.name}
            playerImage={player.images.default}
            countryImage={player.country.images.thumbnail}
          />
        ))
        }
      </div>


    </PlayersGrid>
  );
}

export default Players;
