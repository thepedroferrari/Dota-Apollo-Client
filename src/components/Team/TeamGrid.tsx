import styled from 'styled-components';

export const TeamGrid = styled.main`
  display: grid;
  grid-template-areas:
    'logo logo'
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
    margin-bottom: 0;
    line-height: 1;
    font-weight: bold;
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
    padding-top: 15vh;
  }
`;

export const MatchesGrid = styled.section`
  padding-top: 15vh;
  grid-area: matches;
`;

export const PlayersGrid = styled.section`
  grid-area: players;
`;
