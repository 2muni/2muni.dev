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
  margin: 0.5em auto 0.5em 0;
`
const NextLink = styled(Link)`
  margin: 0.5em 0 0.5em auto;
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
