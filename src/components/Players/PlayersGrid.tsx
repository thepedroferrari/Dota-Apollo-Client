import styled from 'styled-components';

export const PlayersGrid = styled.div<any>`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-area: players;
  max-height: 80vh;
  overflow-y: scroll;
  h2 {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 22px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    border-left: 1px solid white;
    margin: 30px 0;
  }
  & .role {
    display: grid;
    gap: 15px 5px;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    margin-bottom: 20px;

      & div {
      position: relative;
      display: flex;

      & .picture {
        max-width: 100%;
        margin: 0 auto;
      }

      & .country {
        width: 24px;
        z-index: 1;
        top: 0;
        right: 0;
        position: absolute;
      }

      & span {
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        background: ${(props) => props.theme.colors.dotaUi};
        color: ${(props) => props.theme.colors.textWhite};
        font-size: 12px;
        text-align: center;
        z-index: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

  }
  & .role div:not(.${props => props.filter.replace(/ /g, '_').toLowerCase()}) {
    filter: grayscale(100);
    opacity: .5;
  }

  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;


const PlayerGrid = styled.div`
  display: grid;

`;