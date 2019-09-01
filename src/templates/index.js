import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import orderBy from 'lodash/orderBy'
import moment from 'moment'
import Layout from './commons/Layout'
import SEO from './commons/SEO'
import CardList from '../components/organisms/CardList'
import Bio from '../components/organisms/Bio'
import Nav from '../components/organisms/Nav'
import config from '../utils/siteConfig'

const Index = ({ location, data, pageContext }) => {
  // const DEST_POS = 394
  const BASE_LINE = 80
  const PostPer = 7
  const [index, setIndex] = useState(1)
  const [tag, setTag] = useState(
    (location.state && location.state.title) || 'All'
  )
  const [loadMore, setLoadMore] = useState(false)

  const tags = data.allContentfulTag.edges.map(({ node }) => {
    return {
      ...node,
      post: orderBy(
        node.post,
        // eslint-disable-next-line
        [object => new moment(object.publishDateISO)],
        ['desc']
      ),
    }
  })

  const allPosts = [
    {
      id: 'all',
      title: 'All',
      post: data.allContentfulPost.edges.map(({ node }) => node),
    },
    ...tags,
  ]
  const posts = allPosts
    .filter(({ title }) => title === tag)[0]
    .post.slice(0, index * PostPer)

  const onScroll = () => {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    )
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
    const clientHeight = document.documentElement.clientHeight
    if (scrollHeight - (scrollTop + clientHeight) < BASE_LINE) {
      return setLoadMore(true)
    }
    return setLoadMore(false)
  }

  const handleTag = param => {
    setTag(param)
    setIndex(1)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: false })
    return () => {
      window.removeEventListener(`scroll`, onScroll, { passive: false })
    }
  }, [])
  useEffect(() => {
    if (
      loadMore &&
      allPosts.filter(({ title }) => title === tag)[0].post.length / PostPer >
        index
    )
      setIndex(index + 1)
  }, [loadMore])

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle}`}</title>
      </Helmet>
      <SEO />
      <Bio />
      <Nav list={allPosts} current={tag} handleItem={handleTag} />
      <CardList list={posts} />
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
        }
      }
    }
  }
`

export default Index
