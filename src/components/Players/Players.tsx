import React from 'react';
import { useQuery } from '@apollo/client';
import { IPlayer } from '../../interfaces';
import PLAYERS_QUERY from './playersQuery';

function Players() {

  const { loading, error, data } = useQuery(PLAYERS_QUERY);
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;
  console.log(data);


  const { players }: { players: IPlayer[]; } = data;
  return (
    <>
      <h1>PLAYERS</h1>
      <div className="content">
        <div className='grid'>
          {players.map(player => (
            <div key={player.id}>
              <img src={player.images.default} alt={`Player ${player.nick_name}`} />
            </div>
          ))}
        </div>
        <div>
          Selection
      </div>
      </div>
    </>
  );
}

export default Players;
