import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const List = styled.ul`
  width: 100%;
  margin: 1em auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 0.25em 0.25em 0;
  a {
    display: inline-block;
    font-size: 90%;
    background: ${props => props.theme.colors.highlight};
    color: ${props => props.theme.colors.background};
    padding: 0.5em 1em;
    border-radius: 6px;
    text-decoration: none;
  }
`

const TagList = props => {
  return (
    <List>
      {props.tags.map(({ id, title }) => (
        <Tag key={id}>
          <Link to={`/`} state={{ title }}>
            {title}
          </Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList
