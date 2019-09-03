import React, { useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../../images/favicon.ico'
import GlobalStyle from '../../styles/global'
import { lightTheme, darkTheme } from '../../styles/theme'
import Header from '../../components/organisms/Header'
import Footer from '../../components/organisms/Footer'
import config from '../../utils/siteConfig'
import { Context } from '../../utils/Context'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  padding: 0 1.3125rem;
  @media (min-width: ${props => props.theme.responsive.small}) {
    padding: 0;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-grow: 1;
  padding: 0;
`

const Template = ({ children }) => {
  const { state, setState } = useContext(Context)
  const theme = state.theme
  const toggleTheme = () => {
    if (theme === 'light') {
      setState({ theme: 'dark' })
    } else {
      setState({ theme: 'light' })
    }
  }

  return (
    <Wrapper>
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Container>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Content>{children}</Content>
          <Footer />
        </Container>
      </ThemeProvider>
      <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
    </Wrapper>
  )
}

export default Template
