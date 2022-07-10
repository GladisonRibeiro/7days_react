import styled from "styled-components"
import { BodyText } from "../../tokens/text";

export default function Menu () {
  return <>
    <Header>
      <Logo />
      <Navigation>
        <ul>
          <NavigationItem>
            <a href="#">
              <BodyText color="primary">Como fazer</BodyText>
            </a>
          </NavigationItem>
          <NavigationItem>
            <a href="#">
              <BodyText color="primary">Ofertas</BodyText>            
            </a>
          </NavigationItem>
          <NavigationItem>
            <a href="#">
              <BodyText color="primary">Depoimentos</BodyText>          
            </a>
          </NavigationItem>
          <NavigationItem>
            <a href="#">
              <BodyText color="primary">Videos</BodyText>              
            </a>
          </NavigationItem>
          <NavigationItem>
            <a href="#">
              <BodyText color="primary">Meu carrinho</BodyText>
            </a>
          </NavigationItem>
        </ul>
      </Navigation>
    </Header>
  </>
}

const Header = styled.header`
  height: 48.84px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Logo = styled.div`
  width: 177px;
  height: 44.84px;
  background-image: url('/imgs/logo.svg');
`;

const NavigationItem = styled.li`
  padding: 2px 5px;

  & > a > ${BodyText} {
    display: inline-block;
  }
`;

const Navigation = styled.nav`
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
