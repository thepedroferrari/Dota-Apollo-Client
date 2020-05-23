import styled from 'styled-components';

export const PlayerCardGrid = styled.section<any>`
  padding: 25px;
  grid-area: player;
  border: 2px solid ${props => props.theme.colors.dotaUi2};
  margin-left: 25px;
`;
