import styled from "styled-components";

type PaddingSize = 8 | 12 | 16 | 24 | 32 | 37 | 44 | 153;

interface PaddingProps {
  size?: PaddingSize;
}

const Padding = styled.div<PaddingProps>`
  width: ${({size}) => size ?? 8}px;
  height: ${({size}) => size ?? 8}px;
`;

export { Padding };