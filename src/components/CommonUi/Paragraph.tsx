import styled from 'styled-components';

export const Paragraph = styled.p<any>`
  font-size: ${(props) => props.theme.fontSizes.paragraph};
  color: ${(props) => props.theme.colors.textWhite};
  text-shadow: ${(props) => props.theme.textShadows.paragraph};
  padding-left: 1em;
  font-weight: 300;
  & + p {
    margin-top: 1em;
  }
  &:last-of-type {
    margin-bottom: 1em;
  }
`;
