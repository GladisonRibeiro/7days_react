import styled from 'styled-components'

const Page = styled.main`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  min-height: 100vh;
  position: relative;
  background-image: url('/imgs/background.svg'), url('/imgs/linhas.png');
  background-repeat: no-repeat, repeat-x;
  background-position: right top;
`;

const ContainerFlex = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop}px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
`;

export { Page, ContainerFlex }
