import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => (
  <Link to="/" className="home">
    Home
  </Link>
);

export default HomeButton;