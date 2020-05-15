import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';

import { GET_ROSTER_DATA } from './rosterQuery';
import { Placement } from '../../../enums';
import { useMatches } from '../../../hooks';
import { getRosterStatus } from '../../../utils/getRosterStatus';
import { GridRow } from '../ScoreboardGrid';

interface Props {
  position: number;
  rosterId: string;
  name: string;
  logo: string;
  dpc: number;
}

function Roster({ position, rosterId, name, logo, dpc }: Props) {
  // In the event of a real application we would use Subscriptions for this query
  // in order to fetch updated data and trigger the update in this component
  // https://www.apollographql.com/docs/react/v3.0-beta/data/subscriptions/
  const query = useQuery(GET_ROSTER_DATA, {
    variables: {
      rosterId: Number(rosterId)
    }
  });

  const { loading, error, matches } = useMatches({ query, rosterId });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  if (!matches) return null;

  const status = getRosterStatus(dpc, position);

  return (
    <GridRow status={status}>
      <Link to={`/team/${rosterId}`} key={rosterId}>
        <div>{position + 1}</div>
        <img src={logo} alt={`Logo of ${name}`} role="presentation" />
        <div>{name}</div>
        <mark>{status}</mark>
        <div>{matches.played}</div>
        <div>{matches.won}</div>
        <div>{matches.lost}</div>
        <div>{dpc}</div>
      </Link>
    </GridRow>
  );
}

export default Roster;
