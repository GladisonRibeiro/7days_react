import styled from "styled-components";
import { BodyText } from "../../tokens";

export const ImageHero = styled.img`
width: 787px;
height: 975px;
z-index: -1;
pointer-events: none;
position: absolute;
top: 0;
right: calc(50vw - 500px);
display: none;

@media(min-width: ${({theme}) => theme.breakpoints.tablet}px) {
  display: block;
}
`;

export const BoxWrapper = styled.div`
margin-top: 54px;
max-width: 585px;

@media (min-width: ${({theme}) => theme.breakpoints.phone}px) {
  margin-top: 154px;  
}
`;

export const Description = styled(BodyText)`
max-width: 481px;
`;