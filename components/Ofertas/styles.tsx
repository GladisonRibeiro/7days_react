import styled from "styled-components";

export const WrapperOfertas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperItens = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px;
  gap: 30px;
  width: 100%;
`;

export const Card = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;

  background: #FFFFFF;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06), 10px 10px 30px rgba(0, 0, 0, 0.06);
`;

export const WrapperImage = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 200px;
`;

export const CardImage = styled.img`
  object-fit: contain;
  height: 100%;
`;

export const CardContent = styled.div`
  width: 175px;
  padding-top: 27px;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({theme}) => theme.colors.secondary};
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  width: 18px;
  height: 10px;
  background-image: url(imgs/seta.svg);
`;