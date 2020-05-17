import styled from 'styled-components';
import { boxShadowMixin, textShadowMixin } from '../../utils';

export const PlayerGrid = styled.section`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 20px;
  background: ${props => props.theme.colors.dotaUi};
  margin-bottom: 1.5em;
  padding: 10px 0;
  box-shadow: ${boxShadowMixin(0, 5, 10, 2, '#000000', 0.75)};
  & .picture {
    width: 80px;
    align-self: center;
    border-radius: 50%;
    margin-left: 10px;
  }
  & header {
    img {
      width: 24px;
      margin-left: 16px;
      vertical-align: super;
    }
    h4 {
      font-family: 'Cinzel';
      font-size: 1.5em;
      text-shadow: ${textShadowMixin(0, 0, 5, '#FFFFFF', 0.5)};
      line-height: 1.25;
    }
    span {
      font-size: 0.9em;
    }
  }
`;