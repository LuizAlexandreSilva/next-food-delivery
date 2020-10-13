import { DefaultTheme, theme } from "@chakra-ui/core";

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Mento, monospace'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px'
  },
  fontSizes: {
    ...theme.fontSizes
  },
  colors: {
    ...theme.colors,
    red: {
      ...theme.colors.red,
      500: '#f13248',
    },
    gray: {
      ...theme.colors.gray,
      100: '#f0f0f4',
      50: '#f8f8fb',
    }
  }
}

export default customTheme;