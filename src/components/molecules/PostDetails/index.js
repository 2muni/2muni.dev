import React from 'react'
import styled from 'styled-components'
import Emphasis from '../../atoms/Emphasis'
import Caption from '../../atoms/Caption'
import Container from '../../atoms/Container'

const Wrapper = styled(Container)`
  margin: 1.3125em auto;
`
const Title = styled(Emphasis)`
  font-size: 2em;
`
const Date = styled(Caption)`
  margin-top: 1em;
  color: ${props => props.theme.colors.captionColor};
  &::before {
    content: '📅 ';
    margin-right: 0.3125em;
  }
`

const PostDetails = props => {
  return (
    <Wrapper centered>
      <Title>{props.title}</Title>
      <Date>{props.date}</Date>
    </Wrapper>
  )
}

export default PostDetails
