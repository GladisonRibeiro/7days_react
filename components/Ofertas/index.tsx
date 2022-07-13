import { BodyText, Headline1, Headline3, Headline4, Padding } from "../../tokens";
import { Button, Card, CardContent, CardImage, Icon, WrapperImage, WrapperItens, WrapperOfertas } from "./styles";

export default function Ofertas() {
  const lista = [1,2,3,4,5,6];

  const itens = lista.map((a, index) => {
    console.log(a, index);
    return <Card key={index.toString()}>
      <WrapperImage>
        <CardImage src="imgs/ajuga-reptans.png"></CardImage>
      </WrapperImage>
      <CardContent>
        <Headline3>
          Ajuga reptans
        </Headline3>
        <Padding size={8}/>
        <BodyText>R$ 20,00</BodyText>
        <Padding size={16}/>
        <Button>
          Comprar
          <Padding size={24}/>
          <Icon />
        </Button>
      </CardContent>
    </Card>;
  });

  return (
    <WrapperOfertas>
      <Headline4>Conheça nossas</Headline4>
      <Headline1>ofertas</Headline1>
      <WrapperItens>
        {itens}
      </WrapperItens>
    </WrapperOfertas>
  );
}