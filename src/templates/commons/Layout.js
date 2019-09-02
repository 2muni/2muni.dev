import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../../images/favicon.ico'
import GlobalStyle from '../../styles/global'
import { lightTheme, darkTheme } from '../../styles/theme'
import Header from '../../components/organisms/Header'
import Footer from '../../components/organisms/Footer'
import config from '../../utils/siteConfig'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  padding: 2.625rem 1.3125rem;
  > *:not(:last-child) {
    margin-bottom: 2.625rem;
  }
`

const Template = ({ children }) => {
  const [theme, setTheme] = useState(
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('theme')
      : 'light'
  )
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Container>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <div className="siteContent">{children}</div>
          <Footer />
        </Container>
      </ThemeProvider>
      <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
    </div>
  )
}

export default Template
