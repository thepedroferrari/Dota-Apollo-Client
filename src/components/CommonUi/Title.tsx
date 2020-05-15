import styled from 'styled-components';
import { IStyledColors } from '../../interfaces';
import { hex2Rgba } from '../../utils/hex2Rgba';

export const Title = styled.h1<any>`
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.textWhite};
  text-shadow: 0 0 6px ${props => hex2Rgba(props.theme.colors.textWhite, 0.8)};
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-align: ${props => props.align === 'center' ? 'center' : 'left'}
`;