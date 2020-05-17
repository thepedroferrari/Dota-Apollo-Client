import styled from 'styled-components';
import { IStyledColors } from '../../interfaces';
import { hex2Rgba } from '../../utils';
import { boxShadowMixin } from '../../utils';

export const ScoreboardGrid = styled.main<any>`
  padding: 30px 10px;
  max-width: 800px;
  margin: 0 auto;
  font-size: 0.7em;
  font-weight: 100;

  & .grid-item {
    display: grid;
    grid-template-columns: auto 50px 1fr 100px 25px 25px 25px 80px;
    gap: 10px;
    background: ${(props) => hex2Rgba(props.theme.colors.background, 0.8)};
    margin: 1em 2em;
    align-items: center;
    border-radius: 8px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textWhite};

    &:hover {
      background: ${(props) => hex2Rgba(props.theme.colors.background, 1)};
      & img {
        opacity: 1;
        filter: grayscale(0);
        transition: filter 500ms;
      }
      .teamName {
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
      }
    }

    & :first-child {
      margin-left: -10px;
      background: ${(props) => props.theme.colors.dotaUi};
      box-shadow: ${(props) => `
        ${boxShadowMixin(0, 0, 3, 1, props.theme.colors.textWhite, 0.25)},
        ${boxShadowMixin(0, 0, 3, 1, props.theme.colors.dotaUi2, 1, true)}
      `};
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
      max-width: 3em;
      padding: 5px;
      filter: grayscale(100);
      opacity: 0.8;
    }

    .status {
      font-size: 14px;
      padding: 3px 5px;
    }
  }
  @media (max-width: 540px) {
    font-size: 0.75em;
    .grid-item {
      grid-template-columns: auto 0 1fr 80px 25px 25px 25px 50px;
      gap: 5px;
      margin: 10px;
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
    box-shadow: 0 0 0 transparent,
      inset 0 0 10px 2px
        ${(props) => {
          if (props.status === 'Invited')
            return hex2Rgba(props.theme.colors.winner, 0.7);
          if (props.status === 'Qualified')
            return hex2Rgba(props.theme.colors.warning, 0.7);
          return hex2Rgba(props.theme.colors.loser, 0.7);
        }};
    transition: box-shadow 400ms, transform 200ms;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 10px 1px
          ${(props) => {
            if (props.status === 'Invited')
              return hex2Rgba(props.theme.colors.winner, 0.6);
            if (props.status === 'Qualified')
              return hex2Rgba(props.theme.colors.warning, 0.6);
            return hex2Rgba(props.theme.colors.loser, 0.6);
          }},
        inset 0 0 15px 4px
          ${(props) => {
            if (props.status === 'Invited')
              return hex2Rgba(props.theme.colors.winner, 1);
            if (props.status === 'Qualified')
              return hex2Rgba(props.theme.colors.warning, 1);
            return hex2Rgba(props.theme.colors.loser, 1);
          }};
    }

    & .status {
      background: transparent;
      text-align: center;
      margin-right: 1em;
      color: ${(props) => props.theme.colors.textWhite};
      border-radius: 8px;
      border: 1px solid
        ${(props) => {
          if (props.status === 'Invited') return props.theme.colors.winner;
          if (props.status === 'Qualified') return props.theme.colors.warning;
          return props.theme.colors.loser;
        }};
      box-shadow: inset 0 0 10px 1px
        ${(props) => {
          if (props.status === 'Invited')
            return hex2Rgba(props.theme.colors.winner, 0.75);
          if (props.status === 'Qualified')
            return hex2Rgba(props.theme.colors.warning, 0.75);
          return hex2Rgba(props.theme.colors.loser, 1);
        }};
    }
  }
`;
