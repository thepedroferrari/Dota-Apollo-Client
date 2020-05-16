import { hex2Rgba } from './hex2Rgba';

export const boxShadowMixin = (
  top: number,
  left: number,
  blur: number,
  spread: number,
  color: string,
  opacity: number = 1,
  inset: boolean = false,
) => {
  return `${inset ? 'inset' : ''} ${top}px ${left}px ${blur}px ${spread}px ${hex2Rgba(color, opacity)}`;
};

