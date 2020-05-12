import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_ROSTER_DATA } from './rosterQuery';
import { Placement } from '../../../enums';
import { useEventsByRoster } from '../../../hooks/useEventsByRoster';

interface Props {
  position: number;
  rosterId: string;
}

// @DISCLAIMER
// It is probably more performant and cheaper server wise to have one request on the
// scoreboard, filter the data on the client and pass it down as components props.

// The reasons I chose this way is to:
// 1. Show that InMemoryCache actually works and it is awesome
// 2. Have a reasonable loading state where we can see the fallback in action
// 3. Show that useQuery hook accepts data from props
// 4. Use the custom Query eventsByRoster set in the Apollo Server

// How would that be done otherwise, you ask?
// 1st: I would get all the events with specific querries for what this component needs.
// 2nd: I would create an array of Rosters that would receive :IEvent[] from
// the events
// 3rd I would map through the rosters and pass this specific array of events
// to this component, which is exactly what we're getting with the query.

function Roster({ position, rosterId }: Props) {
  // In the event of a real application we would use Subscriptions for this query
  // in order to fetch updated data and trigger the update in this component
  // https://www.apollographql.com/docs/react/v3.0-beta/data/subscriptions/
  const query = useQuery(GET_ROSTER_DATA, {
    variables: {
      rosterId: Number(rosterId)
    }
  });

  const { loading, error, matches, teamName, logoUrl, status, dpc_points } = useEventsByRoster({ query, position, rosterId });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  if (!matches || !teamName || !logoUrl || !status || !dpc_points) return null;

  return (
    <Link to={`/team/${rosterId}`} key={rosterId}>
      <div>
        {Placement[position]} {' | '}
        <img src={logoUrl} alt={`Logo of ${teamName}`} role="presentation" />
        {teamName} {' | '}
        {status} {' | '}
        {matches.played} {' | '}
        {matches.won} {' | '}
        {matches.lost} {' | '}
        {dpc_points}
      </div>
    </Link>
  );
}

export default Roster;
