import React from 'react'
import styled from 'styled-components'
import Link from '../../atoms/Link'
import List from '../../atoms/List'
import Badge from '../../atoms/Badge'
import Container from '../../atoms/Container'

const Wrapper = styled(Container)`
  margin: 0 auto 1.3125em;
  display: flex;
  align-items: center;
  &::before {
    content: '🏷';
    margin-right: 0.3125em;
    font-size: 1.3em;
  }
`

const TagList = props => {
  return (
    <Wrapper centered>
      <List>
        {props.tags.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/`} state={{ title }}>
              <Badge emph>{title}</Badge>
            </Link>
          </li>
        ))}
      </List>
    </Wrapper>
  )
}

export default TagList
