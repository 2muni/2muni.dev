import React, { useState, useEffect, useContext } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import orderBy from 'lodash/orderBy'
import moment from 'moment'
import Layout from './commons/Layout'
import SEO from './commons/SEO'
import CardList from '../components/organisms/CardList'
import Bio from '../components/organisms/Bio'
import Nav from '../components/organisms/Nav'
import { Context } from '../utils/Context'
import config from '../utils/siteConfig'
import InfiniteScroll from '../utils/InfiniteScroll'

const Index = ({ location, data }) => {
  const { state } = useContext(Context)
  const posts = data.allContentfulPost.edges
    .map(({ node }) => node)
    .filter(item => item.node_locale === state.locale)
  const tags = data.allContentfulTag.edges
    .map(({ node }) => node)
    .filter(item => item.node_locale === state.locale)
  const allContent = [
    {
      id: 'all',
      title: 'All',
      post: posts,
    },
    ...tags.map(tag => {
      return {
        ...tag,
        post: orderBy(
          tag.post,
          // eslint-disable-next-line
          [object => new moment(object.publishDateISO)],
          ['desc']
        ),
      }
    }),
  ]
  // const DEST_POS = 394
  const POST_PER = 6

  const [tag, setTag] = useState(
    (location.state && location.state.title) || 'All'
  )
  const taggedPosts = allContent.filter(({ title }) => title === tag)[0].post
  const [page, setPage, LoadState] = InfiniteScroll(taggedPosts, POST_PER)

  useEffect(() => {
    if (LoadState && taggedPosts.length / POST_PER > page) {
      setPage(page + 1)
    }
  }, [LoadState])

  const handleTag = tag => {
    setTag(tag)
    setPage(1)
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle}`}</title>
      </Helmet>
      <SEO />
      <Bio />
      <Nav list={allContent} current={tag} handleItem={handleTag} />
      <CardList list={taggedPosts.slice(0, page * POST_PER + 1)} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          publishDateISO: publishDate(formatString: "YYYY-MM-DD")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
          node_locale
        }
      }
    }
    allContentfulTag(sort: { order: DESC, fields: post }) {
      edges {
        node {
          id
          title
          post {
            id
            title
            slug
            publishDate(formatString: "MMMM DD, YYYY")
            publishDateISO: publishDate(formatString: "YYYY-MM-DD")
            heroImage {
              title
              fluid(maxWidth: 1800) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
            body {
              childMarkdownRemark {
                html
                excerpt(pruneLength: 80)
              }
            }
          }
          node_locale
        }
      }
    }
  }
`

export default Index
