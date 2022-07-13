import { BodyText, Headline2, Padding } from "../../tokens";
import { Card, CardContent, CardImage, Topic, WrapperComoConseguir, WrapperImage } from "./styles";


export default function ComoConseguir() {

  return (
    <WrapperComoConseguir>
      <Card>
        <WrapperImage>
          <CardImage src="imgs/como-conseguir.png"></CardImage>
        </WrapperImage>
        <CardContent>
          <BodyText>Como conseguir</BodyText>
          <Padding size={8}/>
          <Headline2>minha planta</Headline2>
          <Padding size={32}/>
          <Topic>Escolha suas plantas</Topic>
          <Padding size={32}/>
          <Topic>Faça seu pedido</Topic>
          <Padding size={32}/>
          <Topic>Aguarde na sua casa</Topic>
        </CardContent>
      </Card>
    </WrapperComoConseguir>
  );
}