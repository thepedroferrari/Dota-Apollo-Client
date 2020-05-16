import styled from 'styled-components';

export const TeamGrid = styled.main`
  display: grid;
  grid-template-areas:
    'title title'
    'logo logo'
    'rank points'
    'matches matches'
    'players players';
  gap: 10px;
  max-width: 1200px;
  color: white;
  justify-content: center;
  margin: 0 auto;
  padding: 30px 10px;

  .title {
    grid-area: title;
    margin-bottom: 0;
  }
  .rank {
    grid-area: rank;
    text-align: right;
  }
  .points {
    grid-area: points;
  }
  .logo {
    grid-area: logo;
    margin: 0 auto;
    max-width: 96px;
  }
`;

export const MatchesGrid = styled.section`
    grid-area: matches;
`;

export const PlayersGrid = styled.section`
    grid-area: players;
`;