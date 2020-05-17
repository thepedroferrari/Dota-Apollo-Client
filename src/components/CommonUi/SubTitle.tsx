import styled from 'styled-components';

export const SubTitle = styled.h2<any>`
  font-size: ${(props) => props.theme.fontSizes.subtitle};
  color: ${(props) => props.theme.colors.textWhite};
  text-shadow: ${(props) => props.theme.textShadows.subTitle};
  margin: 1em 0 0.5em 0;
  letter-spacing: 2px;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  text-transform: uppercase;
`;
