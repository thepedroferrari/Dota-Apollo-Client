import React from 'react';
import { useQuery } from '@apollo/client';
import { IRoster } from '../../interfaces';
import { GET_SCOREBOARD_DATA } from './scoreboardQuery';
import { sortNumbersBy } from '../../utils/sort';
import Roster from './Roster/Roster';
import Player from '../Player';
import Match from '../Match/Match';

function Scoreboard() {
  const { loading, error, data } = useQuery(GET_SCOREBOARD_DATA);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  const { rosters }: { rosters: IRoster[]; } = data;
  const sortedRosters = sortNumbersBy('dpc_points', rosters, 'dsc');
  if (typeof sortedRosters === 'undefined') return null;

  return (

    <div>
      <h1>SCOREBOARD</h1>

      <Match rosterId={"44016"} eventId={189345} future />
      {sortedRosters.map((roster: IRoster, i) => (

        <Roster
          dpc={roster.dpc_points}
          key={roster.id}
          name={roster.teams[0].name}
          logo={roster.teams[0].images.thumbnail}
          position={i}
          rosterId={roster.id}
        />
      ))}
    </div>
  );
}

export default Scoreboard;
