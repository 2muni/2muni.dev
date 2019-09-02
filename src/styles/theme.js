const theme = {
  colors: {
    base: '#121212', // Black
    secondary: '#e9e9e9', // Medium Gray
    tertiary: '#f3f3f3', // Light Gray
    highlight: '#5b8bf7', // Light Blue
  },
  sizes: {
    maxWidth: '1050px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
}

export const darkTheme = {
  ...theme,
  colors: {
    base: '#2e3440',
    secondary: '#3e4757',
    tertiary: '#4f596e',
    highlight: '#d08770',
    hlHover: '#b6593c',
    textColor: '#d8d7d7',
    captionColor: '#8b8888',
    background: '#242933',
  },
}

export const lightTheme = {
  ...theme,
  colors: {
    base: '#eceff4',
    secondary: '#e0e5ed',
    tertiary: '#d3dae6',
    highlight: '#338ccd',
    hlHover: '#2b77ae',
    textColor: '#242933',
    captionColor: '#6f7d99',
    background: '#ffffff',
  },
}
