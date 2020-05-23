import styled from 'styled-components';

export const GameGrid = styled.main<any>`
  padding: 25px;
  display: grid;
  grid-template-areas:
    'pick pick pick '
    'players players  player'
    'filter  filter  filter ';
  grid-template-columns: 1fr 1fr 375px;

  & .filter {
    grid-area: filter;
    button {
      all: unset;
      border-bottom: 2px solid #51677B;
      color: #51677B;
      font-size: 18px;
      margin: 0 30px 0 0;
      padding: 5px 20px;

      &:hover {
        border-bottom-color: #FFFFFF;
        color: #FFFFFF;
      }
    }

    & .${props => props.filter} {
      background:${props => props.theme.colors.dotaUi2};
      border-bottom-color: #FFFFFF;
      color: #FFFFFF;
    }
  }
`;
