import styled from 'styled-components';
import { BodyText } from '../../tokens';

export const WrapperComoConseguir = styled.div`
  max-width: 995px;
  width: 100%;
  margin: 0 auto;
  margin-top: 220px;
  z-index: 1;

`;

export const Card = styled.div`
  width: 100%;
  height: 440px;
  display: flex;

  background: #FFFFFF;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06), 10px 10px 30px rgba(0, 0, 0, 0.06);
`;

export const WrapperImage = styled.div`
  object-fit: cover;
`;

export const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CardContent = styled.div`
  max-width: 435px;
  padding-top: 58px;
  padding-left: 21px;
  flex-shrink: 0;

`;

export const Topic = styled(BodyText)`
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: ${({theme}) => theme.colors.secondary};
    margin-right: 16px;
    flex-shrink: 0;
  }
`;
