import styled from "styled-components";
import { BodyText } from "../../tokens";

export const Header = styled.header`
height: 48.84px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: flex-end;
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
}

& > ul > ${NavigationItem}:not(:first-of-type) {
  &::before {
    content: '/';
    color: inherit;
    padding-left: 8px;
    padding-right: 16px;
  }
}
`;