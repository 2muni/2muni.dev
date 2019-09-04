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

function getLocalizedItems(list, locale) {
  return list.edges
    .map(({ node }) => node)
    .filter(item => item.node_locale === locale)
}
function getOuterHeight(dom) {
  const margin =
    parseInt(getComputedStyle(dom).marginTop) +
    parseInt(getComputedStyle(dom).marginBottom)

  return dom.offsetHeight + margin
}

const Index = ({ location, data: { allContentfulPost, allContentfulTag } }) => {
  const { state } = useContext(Context)
  const posts = getLocalizedItems(allContentfulPost, state.locale)
  const tags = getLocalizedItems(allContentfulTag, state.locale)
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
  const POST_PER = 6

  const [tag, setTag] = useState(
    (location.state && location.state.title) || 'All'
  )
  const taggedPosts = allContent.filter(({ title }) => title === tag)[0].post
  const [page, setPage, LoadState] = InfiniteScroll(taggedPosts, POST_PER)

  const handleScroll = () => {
    let destPos = 0
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
    const skips = document.querySelectorAll('.header')
    skips.forEach(dom => {
      destPos += getOuterHeight(dom)
    })
    if (destPos < scrollTop) {
      window.scrollTo({
        top: destPos,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    if (LoadState && taggedPosts.length / POST_PER > page) {
      setPage(page + 1)
    }
  }, [LoadState])
  useEffect(() => {
    setPage(1)
    handleScroll()
  }, [tag])

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle}`}</title>
      </Helmet>
      <SEO />
      <Bio className={'header'} />
      <Nav list={allContent} current={tag} handleItem={setTag} />
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
