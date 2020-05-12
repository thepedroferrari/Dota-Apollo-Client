import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { IRoster } from '../../interfaces';
import { GET_SCOREBOARD_DATA } from './scoreboardQuery';
import { sortNumbersBy } from '../../utils/sort';
import Roster from './Roster';

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
      {sortedRosters.map((roster: IRoster, i) => (
        <Roster rosterId={roster.id} position={i} key={roster.id} />
        // <Link to={`/team/${roster.id}`} key={roster.id}>
        //   <li>
        //     <span>{i + 1}</span> | {roster.teams[0].name} | {roster.dpc_points}</li>
        // </Link>
      ))}
    </div>
  );
}

export default Scoreboard;
