import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'

const GlobalStyles = createGlobalStyle`
  html {
    font-family: sans-serif;
    box-sizing: border-box;
  }

  * {
    font-family: inherit;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  svg {
    display: block;
  }

  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  input {
    border: none;
    outline: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
`

const lightTheme = {
  backgroundColor: '#fff',
  textColor: '#000'
}

const darkTheme = {
  backgroundColor: '#15202B',
  textColor: '#1D9BF0'
}

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles
  })
]

export const parameters = {
  options: {
    storySort: {
      order: [
        'HandBook',
        [
          'Introduction',
          'Codebase Structure',
          'Naming Conventions',
          'Source Code Structure',
          'Linters and ESLint',
          'Unit testing',
          'Accessibility (a11y)',
          'Version Control Excellence',
          'Git Submodules'
        ],
        'Components',
        'TafweelaAssets',
        'Boundary'
      ]
    }
  }
}