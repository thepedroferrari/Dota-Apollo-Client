import styled from 'styled-components';

export const TeamGrid = styled.main`
  display: grid;
  grid-template-areas:
    'title title'
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
  }
  .rank {
    grid-area: rank;
    text-align: right;
  }
  .points {
    grid-area: points;
  }
`;

export const MatchesGrid = styled.section`
    grid-area: matches;
`;

export const PlayersGrid = styled.section`
    grid-area: players;
`;