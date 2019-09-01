import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from './commons/Layout'
import SEO from './commons/SEO'
import Hero from '../components/atoms/Hero'
import Container from '../components/atoms/Container'
import PageBody from '../components/atoms/PageBody'
import PostTags from '../components/molecules/PostTags'
import PostLinks from '../components/molecules/PostLinks'
import PostDetails from '../components/molecules/PostDetails'

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDate,
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
      <Container>
        <Hero fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
        <PostDetails title={title} date={publishDate} />
        {tags && <PostTags tags={tags} />}
        <PageBody body={body} />
        <PostLinks previous={previous} next={next} />
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
