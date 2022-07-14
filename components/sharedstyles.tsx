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


const Arrow = styled.div`
  border: solid ${({theme}) => theme.colors.secondary };
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
`;
const ArrowUp = styled(Arrow)`
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;
const ArrowRight = styled(Arrow)`
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;
const ArrowDown = styled(Arrow)`
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;
const ArrowLeft = styled(Arrow)`
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

export { 
  Page,
  ContainerFlex,
  ArrowUp,
  ArrowRight,
  ArrowDown,
  ArrowLeft
};
