import { Headline1, Headline4, Padding } from "../../tokens";
import { EnviarEmailBoasVindas } from "../../usecases/EnviarEmailBoasVindas";
import EmailForm from "../EmailForm";
import { BoxWrapper, Description, ImageHero } from "./styles";

export default function AssinaturaNewsletter() {

  function onSubmit(email) {
    new EnviarEmailBoasVindas().execute(email);
  }

  return <>
    <BoxWrapper>
      <Headline4>Sua casa com as </Headline4>
      <Padding size={12}></Padding>
      <Headline1>melhores <br/>plantas</Headline1>
      <Padding size={24}></Padding>
      <Description>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</Description>
      <Padding size={37}></Padding>
      <EmailForm
        message={"Assinar newsletter"}
        placeholder="Insira seu e-mail"
        onSubmit={onSubmit}
      />
    </BoxWrapper>
    <ImageHero src="/imgs/imagem-hero.png" alt="" />
  </>
}

