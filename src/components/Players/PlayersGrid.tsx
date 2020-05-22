import styled from 'styled-components';

export const PlayersGrid = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-auto-rows: 1fr;
  grid-area: players;
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
    gap: 20px 10px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-auto-rows: 1fr;
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
        font-size: 16px;
        text-align: center;
        z-index: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;
