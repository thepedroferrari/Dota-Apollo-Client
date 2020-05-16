import React from 'react';
import { useQuery } from '@apollo/client';
import { IRoster } from '../../interfaces';
import { GET_SCOREBOARD_DATA } from './scoreboardQuery';
import { sortNumbersBy } from '../../utils/sort';
import Roster from './Roster/Roster';
import { ScoreboardGrid } from './ScoreboardGrid';
import { Title } from '../CommonUi/Title';
import { isSmall } from '../../utils/window';
import ScoreboardHeader from './ScoreboardHeader';

function Scoreboard() {
  const { loading, error, data } = useQuery(GET_SCOREBOARD_DATA);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  const { rosters }: { rosters: IRoster[]; } = data;
  const sortedRosters = sortNumbersBy('dpc_points', rosters, 'dsc');
  if (typeof sortedRosters === 'undefined') return null;

  return (
    <ScoreboardGrid>
      <Title center>DPC STANDINGS</Title>
      <ScoreboardHeader />
      {sortedRosters.map((roster: IRoster, i) => (
        <Roster
          dpc={roster.dpc_points}
          key={roster.id}
          name={roster.teams[0].short_name}
          logo={roster.teams[0].images.thumbnail}
          position={i}
          rosterId={roster.id}
        />
      ))}
    </ScoreboardGrid>
  );
}

export default Scoreboard;
