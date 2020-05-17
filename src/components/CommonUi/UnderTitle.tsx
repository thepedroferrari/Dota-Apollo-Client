import styled from 'styled-components';

export const UnderTitle = styled.h3<any>`
  font-size: ${(props) => props.theme.fontSizes.underTitle};
  color: ${(props) => props.theme.colors.textWhite};
  text-shadow: ${(props) => props.theme.textShadows.underTitle};
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
`;
