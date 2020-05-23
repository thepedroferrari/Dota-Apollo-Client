import styled from 'styled-components';

export const GameGrid = styled.main<any>`
  padding: 25px;
  display: grid;
  grid-template-areas:
    'pick1   pick1   vs      pick2   pick2'
    'players players players players player'
    'filter  filter  filter  filter  nah';

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
