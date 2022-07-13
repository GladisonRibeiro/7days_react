import { BodyText } from "../../tokens/text";
import { Header, Logo, Navigation, NavigationItem } from "./styles";

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

