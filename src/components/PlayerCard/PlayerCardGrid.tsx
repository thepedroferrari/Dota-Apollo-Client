import styled from 'styled-components';

export const PlayerCardGrid = styled.section<any>`
  padding: 15px;
  grid-area: player;
  background-color: ${props => props.theme.colors.dotaUi};
  border: 2px solid ${props => props.theme.colors.dotaUi2};
  margin-left: 25px;
  word-break: break-all;
  overflow-y: scroll;
  overflow-x: hidden;
  h2 {
    align-items: center;
    background-color: ${props => props.theme.colors.dotaUi2};
    display: flex;
    margin: -15px -15px 30px -15px;
    padding: 10px 20px;
    img {
      margin-right: 10px;
    }
  }
  & section {
    font-size: 18px;
    & strong {
      font-weight: bold;
    }
  }
`;
