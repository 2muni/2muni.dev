import React from 'react'
import styled from 'styled-components'
import Container from '../../atoms/Container'
import Link from '../../atoms/Link'
import Switch from '../../molecules/Switch'
import config from '../../../utils/siteConfig'

const Wrapper = styled.header`
  width: 100%;
`
const Content = styled(Container)`
  padding: 1.3125rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Home = styled(Link)`
  font-size: 1.5rem;
`

const Header = ({ theme, toggleTheme }) => {
  return (
    <Wrapper>
      <Content>
        <Home to="/">{config.siteTitle}</Home>
        <Switch
          checked={theme === 'dark'}
          icons={{
            checked: <span>🌙</span>,
            unchecked: <span>☀</span>,
          }}
          onChange={toggleTheme}
        />
      </Content>
    </Wrapper>
  )
}

export default Header
