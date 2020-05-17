import styled from 'styled-components';


export const MenuGrid = styled.nav`
  display: grid;
  grid-template-columns: 50px 80px 80px 1fr;
  column-gap: 5px;
  background: ${props => props.theme.colors.dotaUi};
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,.25);
  font-size: .6em;
  letter-spacing: 1px;

  & button {
    all: unset;
  }

  & a {
    text-decoration: none;
    color: ${props => props.theme.colors.link};
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      text-decoration: underline;
      background: ${props => props.theme.colors.dotaUi2};
    }
  }

  & .goBack {
    height: 48px;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 2.5em;
    line-height: 0;
    color: ${props => props.theme.colors.textWhite};
    margin-top: -6px;

    &:hover {
      cursor: pointer;
      background: ${props => props.theme.colors.dotaUi2};
    }
  }

  & .github {
    justify-self: end;
    padding-right: 20px;
  }

  @media screen and (max-width: 540px) {
    font-size: 0.8em;
    grid-template-columns: 50px 60px 70px 1fr;
  }
`;
