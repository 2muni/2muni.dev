import React from 'react'
import styled from 'styled-components'
import Badge from '../../atoms/Badge'
import Link from '../../atoms/Link'
import Container from '../../atoms/Container'

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
`
const PreviousLink = styled(Link)`
  margin-right: auto;
`
const NextLink = styled(Link)`
  margin-left: auto;
`
const Button = styled(Badge)`
  color: ${props => props.theme.colors.background};
  padding: 0.6em 1em;
  background: ${props => props.theme.colors.highlight};
  transition: background 0.25s ease-out;
  &:hover {
    background: ${props => props.theme.colors.hlHover};
  }
`

const PostLinks = ({ previous, next }) => {
  return (
    <Wrapper centered>
      {previous && (
        <PreviousLink to={`/${previous.slug}/`}>
          <Button emph>&#8592; {previous.title}</Button>
        </PreviousLink>
      )}
      {next && (
        <NextLink to={`/${next.slug}/`}>
          <Button emph>{next.title} &#8594;</Button>
        </NextLink>
      )}
    </Wrapper>
  )
}

export default PostLinks
