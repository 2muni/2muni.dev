import React from 'react'
import styled from 'styled-components'
import Caption from '../../atoms/Caption'
import Badge from '../../atoms/Badge'

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 0.8rem 0.5rem;
  cursor: pointer;
  border-bottom: 3px solid
    ${props => (props.actived ? props.theme.colors.highlight : 'transparent')};
  color: ${props =>
    props.actived
      ? props.theme.colors.textColor
      : props.theme.colors.captionColor};
  * {
    transition: color 0.25s ease-out, background 0.25s ease-out;
  }
  &:hover {
    color: ${props => props.theme.colors.textColor};
  }
`
const Title = styled(Caption)`
  font-size: 1em;
  margin-right: 0.625em;
`
const Count = styled(Badge)`
  font-size: 0.8em;
  padding: 0.3em 0.4em 0.3em 0.3em;
`

const NavItem = ({ actived, title, count, ...other }) => {
  return (
    <Wrapper actived={actived} {...other}>
      <Title>{title}</Title>
      <Count>{count}</Count>
    </Wrapper>
  )
}

export default NavItem
