import React from 'react'
import styled from 'styled-components'
import Caption from '../../atoms/Caption'
import Badge from '../../atoms/Badge'

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 1.125rem 0.5rem;
  cursor: pointer;
  border-bottom: 3px solid
    ${props => (props.actived ? props.theme.colors.highlight : 'transparent')};
  &:hover {
    color: ${props => props.theme.colors.textColor};
  }
  > * {
    color: ${props =>
      props.actived
        ? props.theme.colors.textColor
        : props.theme.colors.captionColor};
  }
`
const Title = styled(Caption)`
  font-size: 1em;
  margin-right: 0.625em;
`

const NavItem = ({ actived, title, count, ...other }) => {
  return (
    <Wrapper actived={actived} {...other}>
      <Title>{title}</Title>
      <Badge>{count}</Badge>
    </Wrapper>
  )
}

export default NavItem
