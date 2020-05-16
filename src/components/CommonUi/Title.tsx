import styled from 'styled-components';
import { hex2Rgba } from '../../utils/hex2Rgba';

export const Title = styled.h1<any>`
  font-size: ${props => props.theme.fontSizes.title};
  color: ${props => props.theme.colors.title};
  text-shadow:${props => props.theme.textShadows.title};
  margin-bottom: 2rem;
  letter-spacing: 2px;
  text-align: ${props => props.center ? 'center' : 'left'}
`;
