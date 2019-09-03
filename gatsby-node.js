const config = require('./src/utils/siteConfig')
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost(
          filter: {node_locale: {eq: "${config.defaultLocale}"}},
          sort: {fields: [publishDate], order: DESC },
          limit: 10000
        ) {
          edges {
            node {
              slug
              title
              publishDate
              node_locale
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPost.edges

      // Create main home page
      createPage({
        path: `/`,
        component: path.resolve(`./src/templates/index.js`),
      })

      // Create each individual post
      posts.forEach((edge, i) => {
        const prev = i === 0 ? null : posts[i - 1].node
        const next = i === posts.length - 1 ? null : posts[i + 1].node
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
          },
        })
      })
      resolve()
    })
  })

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage(
          filter: {node_locale: {eq: "${config.defaultLocale}"}}
        ) {
          edges {
            node {
              slug
              node_locale
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulPage.edges
      pages.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadPosts, loadPages])
}
