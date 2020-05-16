import styled from 'styled-components';

export const PastMatchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px 30px 1fr;
  gap: 10px;
  color: ${props => props.theme.colors.textWhite};
  background: ${props => props.theme.colors.dotaUi};
  padding: 20px;
  max-width: 750px;
  font-size: 1em;
  margin-bottom: 1em;

  & :first-child {
    text-align: right;
  }

  & :nth-child(2), & :nth-child(3) {
    border: 1px solid black;
    text-align: center;
  }
`;