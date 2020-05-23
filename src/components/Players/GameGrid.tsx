import styled from 'styled-components';

export const GameGrid = styled.main`
  padding: 25px;
  display: grid;
  grid-template-areas: 'pick1 vs pick2' 'players players player' 'filter filter filter';

  & .filter {
    grid-area: filter;
  }
`;
