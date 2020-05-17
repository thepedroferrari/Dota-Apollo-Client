import React from 'react';
import { Link } from 'react-router-dom';

const PlayersButton = () => (
  <Link to="/players" className="players">
    Players
  </Link>
);

export default PlayersButton;
