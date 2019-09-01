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
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Home = styled(Link)`
  font-size: 1.5rem;
`

const Header = ({ dark, toggleTheme }) => {
  return (
    <Wrapper>
      <Content>
        <Home to="/">{config.siteTitle}</Home>
        <Switch
          defaultChecked={dark}
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
