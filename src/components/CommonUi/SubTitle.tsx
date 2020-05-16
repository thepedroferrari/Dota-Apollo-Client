import styled from 'styled-components';
import { hex2Rgba } from '../../utils/hex2Rgba';

export const SubTitle = styled.h2<any>`
  font-size: ${props => props.theme.fontSizes.subtitle};
  color: ${props => props.theme.colors.textWhite};
  text-shadow: ${props => props.theme.textShadows.subTitle};
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-align: ${props => props.center ? 'center' : 'left'}
`;
