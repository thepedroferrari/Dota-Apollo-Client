import styled from 'styled-components';

export const PastMatchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px 30px 1fr;
  gap: 10px;
  color: ${props => props.theme.colors.textWhite};
  background: rgba(0,0,0,.5);
  padding: 20px;
  max-width: 750px;
  font-size: 1em;
  margin: 0 auto;
  border-bottom: 1px solid rgba(255,255,255,.25);

  & :first-child {
    text-align: right;
  }

  & :nth-child(2), & :nth-child(3) {
    border: 1px solid black;
    text-align: center;
    background: ${props => props.theme.colors.dotaUi2}
  }
`;