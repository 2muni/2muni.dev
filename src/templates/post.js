import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from './commons/Layout'
import SEO from './commons/SEO'
import Utterances from './commons/Utterances'
import Hero from '../components/molecules/Hero'
import Container from '../components/atoms/Container'
import PageBody from '../components/atoms/PageBody'
import PostTags from '../components/molecules/PostTags'
import PostLinks from '../components/molecules/PostLinks'
import PostDetails from '../components/molecules/PostDetails'
import Bio from '../components/organisms/Bio'

const PostBadges = styled.div`
  margin: 5.612em 0 1.3125em;
`
const Navigator = styled.div`
  margin: 1.3125em 0 1.3125em;
  > * {
    &:nth-child(1) {
      padding: 1.3125em 0;
      margin-bottom: 1.3125em;
      border-top: 1px solid ${props => props.theme.colors.secondary};
      border-bottom: 1px solid ${props => props.theme.colors.secondary};
    }
  }
`

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDateISO,
    tags,
  } = data.contentfulPost
  const postNode = data.contentfulPost
  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />
      <Hero fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
      <Container centered>
        <PostDetails title={title} date={publishDateISO} />
        <PageBody body={body} />
        <PostBadges>{tags && <PostTags tags={tags} />}</PostBadges>
        <Navigator>
          <Bio />
          <PostLinks previous={previous} next={next} />
        </Navigator>
        <Utterances />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate
