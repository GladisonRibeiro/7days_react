import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string,
      body: string,
      placeholder: string,
    },
    breakpoints: {
      phone: number,
      tablet: number,
      desktop: number,
    },
    color: {
      primary: boolean,
      secondary: boolean,
      body: boolean,
    }
  }
}
