import React from 'react';
import BackButton from './BackButton';
import { MenuGrid } from './MenuGrid';
import HomeButton from './HomeButton';
import PlayersButton from './PlayersButton';

const Menu = () => {
  return (
    <MenuGrid>
      <BackButton>&laquo;</BackButton>
      <HomeButton />
      <PlayersButton />
      <a
        className="github"
        href="https://github.com/thepedroferrari/Dota-Apollo-Client"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </MenuGrid>
  );
};

export default Menu;
