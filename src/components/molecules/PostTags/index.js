import React from 'react'
import styled from 'styled-components'
import Link from '../../atoms/Link'
import List from '../../atoms/List'
import Badge from '../../atoms/Badge'
import Container from '../../atoms/Container'

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  &::before {
    content: '🏷';
    margin-right: 0.3125em;
  }
  li {
    &:not(:first-child) {
      margin-left: 0.3em;
    }
  }
`
const Tag = styled(Badge)`
  background: ${props => props.theme.colors.base};
  color: ${props => props.theme.colors.captionColor};
  &:hover {
    color: ${props => props.theme.colors.textColor};
  }
`

const TagList = props => {
  return (
    <Wrapper centered>
      <List>
        {props.tags.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/`} state={{ title }}>
              <Tag emph>{title}</Tag>
            </Link>
          </li>
        ))}
      </List>
    </Wrapper>
  )
}

export default TagList
