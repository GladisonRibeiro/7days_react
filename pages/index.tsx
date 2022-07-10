import { AssinaturaNewsletter, ContainerFlex, Menu, Page } from "../components";
import { Padding } from "../tokens";


export default function Home() {
  return (
    <Page>
      <ContainerFlex>
        <Padding size={8} />
        <Menu />
        <AssinaturaNewsletter />
      </ContainerFlex>
    </Page>
  )
}
