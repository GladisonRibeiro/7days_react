import styled from "styled-components";

import { BodyText, Headline1, Headline4, Padding } from "../../tokens";
import { EnviarEmailBoasVindas } from "../../usecases/EnviarEmailBoasVindas";
import EmailForm from "../EmailForm";

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

const ImageHero = styled.img`
  width: 787px;
  height: 975px;
  z-index: -1;
  pointer-events: none;
  position: absolute;
  top: 0;
  right: calc(50vw - 500px);
`;

const BoxWrapper = styled.div`
  margin-top: 154px;
  max-width: 585px;
`;

const Description = styled(BodyText)`
  max-width: 481px;
`;
