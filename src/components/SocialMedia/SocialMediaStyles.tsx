import styled from 'styled-components';

export const Address = styled.address`
  display: inline;
  a {
    margin-right: 3px;
    color: #FFFFFF;
    &:not(:last-child)::after {
      content: ','
    }
  }
`;
