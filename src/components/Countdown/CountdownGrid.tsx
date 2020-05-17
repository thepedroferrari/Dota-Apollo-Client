import styled from 'styled-components';

export const CountdownGrid = styled.time`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  gap: 30px;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 40px;
  margin: 0 auto 1em auto;
  justify-content: center;
  align-items: center;
  width: fit-content;
  & .container {
    display: flex;
    flex-direction: column;
    & .time {
      font-family: 'Cinzel';
      font-size: 1.75em;
      font-weight: 300;
    }
    & .time-frame {
      font-weight: 100;
      font-size: 0.7em;
    }
  }

  @media screen and (max-width: 540px) {
    padding: 10px;
    gap: 15px;
    grid-template-columns: repeat(4, 60px);

    & .container {
      & .time-frame {
        font-size: 0.8em;
      }
    }
  }
`;
