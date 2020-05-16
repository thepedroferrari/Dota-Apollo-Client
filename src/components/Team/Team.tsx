import React from 'react';
import { RouteChildrenProps } from "react-router-dom";
import { useQuery } from '@apollo/client';

import TEAM_QUERY from './teamQuery';
import { ITeam, IRoster } from '../../interfaces';
import { useMatches } from '../../hooks/useMatches';
import Match from '../Match/Match';
import Player from '../Player';
import { Title } from '../CommonUi/Title';
import { Placement } from '../../enums';
import { sortNumbersBy } from '../../utils/sort';
import { TeamGrid, MatchesGrid, PlayersGrid } from './TeamGrid';
import { SubTitle } from '../CommonUi/SubTitle';
import { getRosterStatus } from '../../utils/getRosterStatus';
import { UnderTitle } from '../CommonUi/UnderTitle';
import { Paragraph } from '../CommonUi/Paragraph';

interface TeamParams {
  id: string;
  rosterId: string;
}

const Team = ({ match }: RouteChildrenProps<TeamParams>) => {
  const rosterId = String(match?.params.rosterId);

  const query = useQuery(TEAM_QUERY, {
    variables: {
      rosterId: Number(rosterId)
    }
  });

  const { loading, error, matches } = useMatches({ query, rosterId });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  const { data } = query;
  const { players, teams } = data.roster as IRoster;

  const team: ITeam = teams[0];


  const { rosters }: { rosters: IRoster[]; } = data;
  const sortedRosters = sortNumbersBy('dpc_points', rosters, 'dsc');
  if (typeof sortedRosters === 'undefined') return null;

  const position = sortedRosters.findIndex(roster => roster.id === rosterId);

  return (
    <TeamGrid>
      <Title center className="title"><img alt={`Logo for the dota2 team ${team.name}`} src={team.images.thumbnail} /> {team.name}</Title>
      <span className="rank">Rank: {Placement[position]}</span>
      <span className="points">DPC Points: {data.roster.dpc_points}</span>

      <MatchesGrid className="matches">
        <SubTitle>Match History and Future</SubTitle>
        <Paragraph>{team.name} is a team from {team.country.name} that participated in {matches?.past.length || 0} matches for the DotA Pro Circuit 2020, winning {matches?.won || 0} of them while losing {matches?.lost || 0}; They achieved the {Placement[position]} position on the League. As of now, {team.name} is {getRosterStatus(sortedRosters[position].dpc_points, position).toLowerCase()} to the International, which has been postponed due to COVID-19.</Paragraph>

        {(matches?.future.length || 0) > 0 && <Paragraph>The team has {matches?.future.length} scheduled matches to try to increase their DotA Pro Circuit points.</Paragraph>}

        <UnderTitle>Past results</UnderTitle>
        {matches?.past.map(eventId => (
          <Match eventId={eventId} rosterId={rosterId} key={eventId} />
        ))}
        <UnderTitle>Upcoming Matches</UnderTitle>
        {
          // Future matches call a Countdown component, each countdown starts a timeout.
          // if we have a heavy load and too many countdowns start at the same time
          // we might see the second going down at a slightly pace. For most cases
          // this is fine but if we wanted to make it better we could have one countdown
          // state and subscribe every child to the same state to be updated by the
          // timeout.
          // Alternativelly we could hide seconds in any match that will happen in
          // more than one day in the future, and update the countdown every 60s.
          matches?.future.map(eventId => (
            <Match eventId={eventId} rosterId={rosterId} key={eventId} future />
          ))}
      </MatchesGrid>


      <PlayersGrid className="players">
        {players.map(player => <Player key={player.id} playerId={player.id} />)}
      </PlayersGrid>
    </TeamGrid>
  );
};

export default Team;
