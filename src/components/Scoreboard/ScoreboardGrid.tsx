import styled from 'styled-components';
import { IStyledColors } from '../../interfaces';
import { hex2Rgba } from '../../utils/hex2Rgba';


export const ScoreboardGrid = styled.div<any>`
  padding: 30px 10px;
  max-width: 800px;
  margin: 0 auto;

  & :nth-child(13) {
    margin-bottom: 40px;
  }

  & .grid-item {
    display: grid;
    grid-template-columns: auto 50px 1fr 100px 25px 25px 25px 80px;
    grid-gap: 10px;
    background: ${props => hex2Rgba(props.theme.colors.background, .8)};
    margin: 10px 30px;
    align-items: center;
    border-radius: 10px;
    text-decoration: none;
    color: ${props => props.theme.colors.textWhite};

    &:hover {
      background: ${props => hex2Rgba(props.theme.colors.background, 1)};
      & img {
        opacity: 1;
        filter: grayscale(0);
      }
    }

    & :first-child {
      margin-left: -10px;
      background: ${props => props.theme.colors.dotaUi};
      box-shadow: inset 0 0 3px 1px ${props => props.theme.colors.dotaUi2};
      border-radius: 5px;
      text-align: center;
      width: 27px;
      height: 25px;
      padding-right: 1px;
      font-size: 14px;
      justify-content: center;
      align-items: center;
      display: flex;
    }

    & :last-child {
      text-align: right;
      padding-right: 16px;
    }

    img {
      max-width: 35px;
      padding: 5px;
      filter: grayscale(100);
      opacity: .8;
    }
  }
  @media (max-width: 540px) {
    font-size: 14px;
    .grid-item {
      grid-template-columns: auto 0 1fr 80px 25px 25px 25px 80px;
      grid-gap: 5px;
      margin: 10px 0px;
      height: 48px;

      img {
        width: 0;
        height: 0;
        visibility: hidden;
      }

      .status {
        font-size: 12px;
      }

      & :first-child {
        margin-left: -7px;
      }
    }
  }
`;

export const GridRow = styled.div<IStyledColors & any>`
  & .grid-item {
    box-shadow: inset 0 0 10px 2px ${(props) => {
    if (props.status === 'Invited') return hex2Rgba(props.theme.colors.winner, 0.7);
    if (props.status === 'Qualified') return hex2Rgba(props.theme.colors.warning, 0.7);
    return hex2Rgba(props.theme.colors.loser, 0.7);
  }};
    &:hover {
      box-shadow: inset 0 0 15px 4px ${(props) => {
    if (props.status === 'Invited') return hex2Rgba(props.theme.colors.winner, 1);
    if (props.status === 'Qualified') return hex2Rgba(props.theme.colors.warning, 1);
    return hex2Rgba(props.theme.colors.loser, 1);
  }}
  }

    & .status {
      background: transparent;
      text-align: center;
      margin-right: 20px;
      color: ${props => props.theme.colors.textWhite};
      border-radius: 8px;
      border: 2px solid ${(props) => {
    if (props.status === 'Invited') return props.theme.colors.winner;
    if (props.status === 'Qualified') return props.theme.colors.warning;
    return props.theme.colors.loser;
  }};
      box-shadow: inset 0 0 10px 1px ${(props) => {
    if (props.status === 'Invited') return hex2Rgba(props.theme.colors.winner, 1);
    if (props.status === 'Qualified') return hex2Rgba(props.theme.colors.warning, 1);
    return hex2Rgba(props.theme.colors.loser, 1);
  }};
  }
}`;
