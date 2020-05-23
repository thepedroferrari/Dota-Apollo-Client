import React, { useState } from 'react';
import { useQuery } from '@apollo/client';


import { IExtendedPlayer, CountryRegionName } from '../../interfaces';
import { getPlayersByRole, snakeCase } from '../../utils/';
import PlayerPortrait from '../PlayerPortrait';
import PlayerCard from '../PlayerCard';
import { GameGrid } from './GameGrid';
import PLAYERS_QUERY from './playersQuery';
import { PlayersGrid } from './PlayersGrid';

function Players() {
  const { loading, error, data } = useQuery(PLAYERS_QUERY);
  const [filter, setFilter] = useState<CountryRegionName | ''>('');
  const [selectedPlayer, setSelectedPlayer] = useState<IExtendedPlayer | undefined>(undefined);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  const { extendedPlayers }: { extendedPlayers: IExtendedPlayer[]; } = data;
  const playersByRoles = getPlayersByRole(extendedPlayers);

  const filterPlayersByRegion = (region: CountryRegionName) => {
    if (filter === region) {
      setFilter('');
      return null;
    }
    setFilter(region);
  };

  const setEastAsia = () => filterPlayersByRegion('East Asia');
  const setEurope = () => filterPlayersByRegion('Europe');
  const setNothAmerica = () => filterPlayersByRegion('North America');
  const setOceania = () => filterPlayersByRegion('Oceania');
  const setSouthAmerica = () => filterPlayersByRegion('South America');
  const setSouthEastAsia = () => filterPlayersByRegion('South East Asia');
  const setWesternAsia = () => filterPlayersByRegion('Western Asia');

  const cleanFilter = snakeCase(filter);
  console.log(cleanFilter);

  return (
    <GameGrid filter={cleanFilter}>
      <PlayersGrid filter={cleanFilter}>
        <h2>Hard Carry</h2>
        <div className="role hardCarry">
          {playersByRoles['Hard Carry'].map((player) => (
            <PlayerPortrait
              key={`hc-${player.id}`}
              player={player}
              setSelectedPlayer={setSelectedPlayer}
            />
          ))
          }
        </div>
        <h2>Mid</h2>
        <div className="role mid">
          {playersByRoles.Mid.map((player) => (
            <PlayerPortrait
              key={`mid-${player.id}`}
              player={player}
              setSelectedPlayer={setSelectedPlayer}
            />
          ))
          }
        </div>
        <h2>Off Lane</h2>
        <div className="role offLane">
          {playersByRoles['Off-lane'].map((player) => (
            <PlayerPortrait
              key={`off-${player.id}`}
              player={player}
              setSelectedPlayer={setSelectedPlayer}
            />
          ))
          }
        </div>
        <h2>Support</h2>
        <div className="role support">
          {playersByRoles.Support.map((player) => (
            <PlayerPortrait
              key={`sup-${player.id}`}
              player={player}
              setSelectedPlayer={setSelectedPlayer}
            />
          ))
          }
        </div>
        <h2>Hard Support</h2>
        <div className="role hardSupport">
          {playersByRoles['Hard Support'].map((player) => (
            <PlayerPortrait
              key={`hsup-${player.id}`}
              player={player}
              setSelectedPlayer={setSelectedPlayer}
            />
          ))
          }
        </div>
      </PlayersGrid>
      <div className="filter">
        <button className="east_asia" onClick={setEastAsia} >East Asia</button>
        <button className="europe" onClick={setEurope}>Europe</button>
        <button className="north_america" onClick={setNothAmerica} >North America</button>
        <button className="oceania" onClick={setOceania}>Oceania</button>
        <button className="south_america" onClick={setSouthAmerica} >South America</button>
        <button className="south_east_asia" onClick={setSouthEastAsia} >South East Asia</button>
        <button className="western_asia" onClick={setWesternAsia} >Western Asia</button>
      </div>

      <PlayerCard
        player={selectedPlayer}
      />
    </GameGrid>
  );
}

export default Players;
