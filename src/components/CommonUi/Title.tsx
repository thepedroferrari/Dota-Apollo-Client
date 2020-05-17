import styled from 'styled-components';

export const Title = styled.h1<any>`
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.title};
  text-shadow: ${(props) => props.theme.textShadows.title};
  margin-bottom: 1em;
  letter-spacing: 1vw;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
`;
