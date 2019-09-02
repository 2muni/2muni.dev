import React from 'react'
import styled from 'styled-components'
import List from '../../atoms/List'
import Container from '../../atoms/Container'
import NavItem from '../../molecules/NavItem'

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  margin: 2.625rem auto;
  background: ${props => props.theme.colors.background};
  z-index: 100;
  transition: background 0.25s ease-out;
`
const Menu = styled(List)`
  margin: 0 auto;
  overflow-x: scroll;
  max-width: ${props => props.theme.sizes.maxWidth};
  box-shadow: inset 0 -1px 0 ${props => props.theme.colors.secondary};
  transition: box-shadow 0.25s ease-out;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Nav = ({ list, current, handleItem }) => {
  return (
    <Wrapper>
      <Container>
        <Menu>
          {list.map(item => (
            <NavItem
              key={item.id}
              actived={current === item.title}
              onClick={() => handleItem(item.title)}
              title={item.title}
              count={item.post.length}
            />
          ))}
        </Menu>
      </Container>
    </Wrapper>
  )
}

export default Nav
