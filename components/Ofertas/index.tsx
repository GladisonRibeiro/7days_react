import { useEffect, useState } from "react";
import { BodyText, Headline1, Headline3, Headline4, Padding } from "../../tokens";
import { ObterListaProdutos } from "../../usecases/ObterListaProdutos";
import { Button, Card, CardContent, CardImage, Icon, WrapperImage, WrapperItens, WrapperOfertas } from "./styles";

export default function Ofertas() {
  const [itens, setItens] = useState([])
  useEffect(() => {
    obterItens();
  }, []);

  async function obterItens() {
    const data = await new ObterListaProdutos().execute();
    var itens = data.map((item, index) => {
      return <Card key={item.ordem.toString()}>
        <WrapperImage>
          <CardImage src={`imgs/${item.img}.png`}></CardImage>
        </WrapperImage>
        <CardContent>
          <Headline3>
            {item.name}
          </Headline3>
          <Padding size={8}/>
          <BodyText>{ item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</BodyText>
          <Padding size={16}/>
          <Button>
            Comprar
            <Padding size={24}/>
            <Icon />
          </Button>
        </CardContent>
      </Card>;
    });
    setItens(itens);
  }

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