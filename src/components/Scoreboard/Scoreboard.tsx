import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import { IEvent } from '../../interfaces';

const ALL_EVENTS = gql`
  query allEvents {
    events {
      id
      title
      tournament_name
      tier
      pbp_status
      tournament_name
      substage_id
      deleted_at
      pbp_status
      postponed_from
      scores
    }
  }
`;


function Scoreboard(props: {}) {
  console.log(props);
  const { loading, error, data } = useQuery(ALL_EVENTS);
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <div>
      <h1>SCOREBOARD</h1>
      {data.events.map((event: IEvent) => (
        <p key={event.id}>{event.title}</p>
      ))}
    </div>
  );
}

export default Scoreboard;
