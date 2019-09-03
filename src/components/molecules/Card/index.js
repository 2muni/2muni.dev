import React from 'react'
import styled from 'styled-components'
import BgImg from '../../atoms/BgImg'
import Emphasis from '../../atoms/Emphasis'
import Caption from '../../atoms/Caption'
import Link from '../../atoms/Link'

const Post = styled.li`
  transition: box-shadow 0.25s ease-out, background 0.25s ease-out;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${props => props.theme.colors.secondary};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  a {
    display: flex;
    flex-flow: column;
    color: ${props => props.theme.colors.textColor};
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`
const Title = styled(Emphasis)`
  margin: 1rem 1rem 0.5rem 1rem;
`
const Date = styled(Caption)`
  margin: 0 1rem 0.5rem 1rem;
  color: ${props => props.theme.colors.captionColor};
`
const Excerpt = styled(Caption)`
  font-size: 1em;
  margin: 0 1rem 1rem 1rem;
  color: ${props => props.theme.colors.captionColor};
`

const Card = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        <BgImg fluid={heroImage.fluid} />
        <Title>{title}</Title>
        <Date>{publishDate}</Date>
        <Excerpt
          emph
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.excerpt,
          }}
        />
      </Link>
    </Post>
  )
}

export default Card
