import React from 'react'
import styled from 'styled-components'
import BgImg from '../../atoms/BgImg'
import Emphasis from '../../atoms/Emphasis'
import Caption from '../../atoms/Caption'
import Link from '../../atoms/Link'

const Post = styled.li`
  position: relative;
  width: 100%;
  margin: 0 0 1em 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.textColor};
    transition: color 0.25s ease-out, box-shadow 0.25s ease-out,
      background 0.25s ease-out;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.24);
        transition: opacity 0.25s ease-out;
        opacity: 0;
      }
    }
    img {
      transform: scale(1, 1);
      transition: transform 0.7s ease-out !important;
    }
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      background: ${props => props.theme.colors.base};
      img {
        transform: scale(1.07, 1.07);
      }
      .gatsby-image-wrapper::after {
        opacity: 1;
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
  margin: 0.5rem 1rem;
  color: ${props => props.theme.colors.captionColor};
`

const Card = ({ slug, heroImage, title, publishDateISO, body, ...props }) => {
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        <BgImg fluid={heroImage.fluid} backgroundColor />
        <Title>{title}</Title>
        <Date>{publishDateISO}</Date>
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
