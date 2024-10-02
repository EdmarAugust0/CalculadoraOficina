import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  darkGrey: '#585858',
  darkRed: '#610B21',
  red: '#DF013A',
  black: '#000'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${colors.black};
    overflow: hidden;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
