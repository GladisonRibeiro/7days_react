import styled from "styled-components";
import { BodyText } from "../../tokens";

export const Header = styled.header`
width: 100%;
display: flex;
justify-content: space-between;
flex-direction: column;

@media(min-width: ${({theme}) => theme.breakpoints.tablet}px) {
  height: 50px;
  flex-direction: row;
  align-items: flex-end;
}
`;

export const Logo = styled.div`
width: 177px;
height: 44.84px;
background-image: url('/imgs/logo.svg');
`;

export const NavigationItem = styled.li`
padding: 2px 5px;

& > a > ${BodyText} {
  display: inline-block;
}
`;

export const Navigation = styled.nav`
& > ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  padding-top: 45px;

  @media(min-width: ${({theme})=> theme.breakpoints.phone}px) {
    padding-top: 0px;
    flex-direction: row;
  }
}

& > ul > ${NavigationItem}:not(:first-of-type) {
  &::before {
    color: inherit;
    padding-left: 8px;
    padding-right: 16px;

    @media(min-width: ${({theme})=> theme.breakpoints.phone}px) {
      content: '/';
    }
  }
}
`;