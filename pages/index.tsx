import { AssinaturaNewsletter, ComoConseguir, ContainerFlex, Menu, Ofertas, Page } from "../components";
import { Padding } from "../tokens";


export default function Home() {
  return (
    <Page>
      <ContainerFlex>
        <Padding size={8} />
        <Menu />
        <AssinaturaNewsletter />
        <ComoConseguir />
        <Padding size={44} />
        <Ofertas/>
        <Padding size={153} />
      </ContainerFlex>
    </Page>
  )
}
