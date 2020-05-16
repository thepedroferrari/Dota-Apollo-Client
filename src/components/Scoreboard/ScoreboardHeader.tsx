import React from 'react';
import styled from 'styled-components';

const GridHeader = styled.header`
  background: ${props => props.theme.colors.background};
  display: grid;
  grid-template-columns: 1fr 25px 25px 25px 65px;
  margin: 0 30px;
  color: #fff;
  gap: 10px;
  padding: 15px;
  border-radius: 3px;
  position: sticky;
  top: 0;
  font-weight: bold;
  font-size: 18px;
  z-index: 1;
  & :last-child {
    text-align: right;
    padding-right: 16px;
  }

  & :first-child {
    text-indent: 30px;
  }
  @media screen and (max-width: 540px) {
    margin: 0;
    font-size: 16px;
    grid-template-columns: 1fr 25px 25px 25px 65px;
    gap: 5px;

    & :last-child {
      padding-right: 0;
    }

    & :first-child {
      text-indent: 10px;
    }
  }
`;

const ScoreboardHeader = () => {
  return (
    <GridHeader>
      <div>Name</div>
      <div>P</div>
      <div>W</div>
      <div>L</div>
      <div>Score</div>
    </GridHeader>
  );
};

export default ScoreboardHeader;
