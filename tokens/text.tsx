import styled, { css, DefaultTheme } from 'styled-components';

interface TextProps {
  color?: 'primary' | 'secondary' | 'body';
}

const cssHeadline = css`
  font-family: 'Elsie Swash Caps', cursive;
  font-style: normal;
  font-weight: 900;
  color: ${({theme}) => theme.colors.primary};
`;

const Headline1 = styled.h1`
  ${cssHeadline};
  font-size: 82px;
  line-height: 94px;
`;

const Headline2 = styled.h2`
  ${cssHeadline};
  font-size: 42px;
  line-height: 48px;
`;

const Headline3 = styled.h3`
  ${cssHeadline};
  font-size: 32px;
  line-height: 37px;
`;

const Headline4 = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  color: ${({theme}) => theme.colors.body};
`;

const BodyText = styled.p<TextProps>`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: ${({theme, color}) => theme.colors[color] || theme.colors.body};
`;

export { BodyText, Headline1, Headline2, Headline3, Headline4 };