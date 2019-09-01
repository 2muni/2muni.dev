import React from 'react'
import styled from 'styled-components'
import Badge from '../../atoms/Badge'
import Link from '../../atoms/Link'
import Container from '../../atoms/Container'

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 1.5em 2em;
`
const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`
const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
`

const PostLinks = ({ previous, next }) => {
  return (
    <Wrapper centered>
      {previous && (
        <PreviousLink to={`/${previous.slug}/`}>
          <Badge emph>&#8592; {previous.title}</Badge>
        </PreviousLink>
      )}
      {next && (
        <NextLink to={`/${next.slug}/`}>
          <Badge emph>{next.title} &#8594;</Badge>
        </NextLink>
      )}
    </Wrapper>
  )
}

export default PostLinks
