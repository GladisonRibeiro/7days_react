import {
  AssinaturaNewsletter,
  ComoConseguir,
  ContainerFlex,
  Footer,
  Menu,
  NossasPlantas,
  Page
} from "../components";
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
        <NossasPlantas/>
        <Padding size={153} />
      </ContainerFlex>
      <Footer />
    </Page>
  )
}
