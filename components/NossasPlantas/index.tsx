import React from "react";
import { useEffect, useRef, useState } from "react";
import { Ordem, Planta } from "../../entity";
import { BodyText, Headline1, Headline3, Headline4, Padding } from "../../tokens";
import { ObterListaProdutos } from "../../usecases/ObterListaProdutos";
import { ArrowDown, ArrowUp } from "../sharedstyles";
import { Button, Card, CardContent, CardImage, Icon, OrderItem, SectionFiltro, WrapperFiltro, WrapperImage, WrapperItens, WrapperOfertas } from "./styles";

type FiltroProps = {
  min: number,
  max: number,
  value: number,
  step: number,
  onFilter: Function,
  onOrder: Function,
  ordenacoes: Ordem[]
};

export default function NossasPlantas() {
  const [plantas, setPlantas] = useState(new Array<Planta>())
  const [plantasFiltradas, setPlantasFiltradas] = useState([])
  const [filtroProps, setFiltroProps] = useState(null);

  useEffect(() => {
    if (plantas && plantas.length) {
      const newFiltroProps = calcularPropsFiltro(plantas);
      if (newFiltroProps) {
        setFiltroProps(newFiltroProps);
      }
    }
  }, [plantas]);

  useEffect(() => {
    obterPlantas();
  }, []);  

  async function obterPlantas() {
    const newPlantas = await new ObterListaProdutos().execute();
    setPlantas([...newPlantas]);
    setPlantasFiltradas([...newPlantas]);
  }

  const calcularPropsFiltro = (plantas: any[]) : FiltroProps => {
    const valores = plantas.map(planta => planta.preco);
    const min = Math.min(...valores);
    const max = Math.max(...valores);

    return {
      min,
      max,
      value: max,
      step: 1,
      onFilter: filtrarPlantasPorValor(),
      onOrder: (ordem) => ordernarPlantas.call(this, ordem),
      ordenacoes: [
        { label: "Preço", asc: true, selecionado: true, propriedade: 'preco' },
        { label: "Nome", asc: true, selecionado: false, propriedade: 'name' }
      ]
    };
  }

  const timeoutRef = useRef(null);
  function filtrarPlantasPorValor() {
    return function(valor) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        const newPlantasFiltradas = plantas.filter(planta => planta.preco <= valor);
        setPlantasFiltradas(newPlantasFiltradas);
      }, 500);
    }
  }

  function ordernarPlantas(ordem : Ordem) {
    function sortAsc(a, b) {
      if (a[ordem.propriedade] < b[ordem.propriedade])
        return -1;
      if (a[ordem.propriedade] > b[ordem.propriedade])
        return 1;
      return 0;
    }
    
    function sortDsc(a, b) {
      if (b[ordem.propriedade] < a[ordem.propriedade])
        return -1;
      if (b[ordem.propriedade] > a[ordem.propriedade])
        return 1;
      return 0;
    }

    const plantasCopy = [...plantasFiltradas];
    const newPlantasFiltradas = [...plantasCopy.sort(ordem.asc ? sortAsc : sortDsc)];
    setPlantasFiltradas(newPlantasFiltradas);
  }

  return (
    <WrapperOfertas>
      <Headline4>Conheça nossas</Headline4>
      <Headline1>Nossas plantas</Headline1>
      {filtroProps && <Filtro filtroProps={filtroProps} />}
      <ListaPlantas plantas={plantasFiltradas}  />
    </WrapperOfertas>
  );
}

class Filtro extends React.Component<{ filtroProps: FiltroProps }, { value, ordenacoes: Ordem[] }> {  
  constructor(props) {
    super(props);
    this.state = { value: props.filtroProps.value, ordenacoes: props.filtroProps.ordenacoes };
    this.handleChange = this.handleChange.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
  }

  handleChange(event) {    
    const newValue = event.target.value;
    this.props.filtroProps.onFilter(newValue);
    this.setState({value: newValue});
  }

  handlerClick(ordem: Ordem) {
    const ordenacoes = this.state.ordenacoes.map(ordenacao => {
      ordenacao.selecionado = ordem.label == ordenacao.label;
      return ordenacao;
    });
    const selecionado = ordenacoes.find(ordem => ordem.selecionado);
    selecionado.asc = !selecionado.asc;
    this.setState({ ordenacoes });
    this.props.filtroProps.onOrder(selecionado);
  }

  render() {
    return (
      <WrapperFiltro>
        <SectionFiltro>
          Ordernar por: &nbsp;&nbsp;
          {
            this.state.ordenacoes && this.state.ordenacoes.map((ordem, index) => (
              <Ordernar key={index} ordem={ordem} onClick={this.handlerClick} />
            ))
          }
        </SectionFiltro>
        <SectionFiltro>
          Filtrar por preço: &nbsp;&nbsp;
          <input
            type="range"
            min={this.props.filtroProps.min}
            max={this.props.filtroProps.max}
            step={this.props.filtroProps.step}
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div>&nbsp; R$ {this.state.value},00</div>
        </SectionFiltro>
      </WrapperFiltro>
    );
  }
}

function Ordernar({ ordem, onClick }) {
  const [order, setOrder] = useState(true);

  function onOndernar() {
    const value = new Ordem();
    value.label = ordem.label;
    value.asc = !order;
    onClick(value);
    setOrder(!order);
  }

  return (
    <OrderItem selecionado={ordem.selecionado} onClick={onOndernar}>
      { ordem.label } { ordem.selecionado && (order ? <ArrowUp /> : <ArrowDown />) }
    </OrderItem>
  );
}

function ListaPlantas({ plantas }) {
  return (
    <WrapperItens>
      {
        plantas.map((planta) => {
          return (
            <Card key={planta.ordem.toString()}>
              <WrapperImage>
                <CardImage src={`imgs/${planta.img}.png`}></CardImage>
              </WrapperImage>
              <CardContent>
                <Headline3>
                  {planta.name}
                </Headline3>
                <Padding size={8} />
                <BodyText>{planta.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</BodyText>
                <Padding size={16} />
                <Button>
                  Comprar
                  <Padding size={24} />
                  <Icon />
                </Button>
              </CardContent>
            </Card>
          );
        })
      }
    </WrapperItens>
  );
}