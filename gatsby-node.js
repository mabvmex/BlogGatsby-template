/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const posts = await graphql(`
    query {
      allStrapiPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          id
          title
          content
          url
          seo_title
          seo_description
          createdAt
          miniature {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `)

  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts.data.allStrapiPost.nodes, // An array of objects
    itemsPerPage: 10, // 10, // How many items you want per page
    pathPrefix: "/", //"/blog", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/blog.js`), // Just like `createPage()`
  })

  posts.data.allStrapiPost.nodes.forEach(post => {
    createPage({
      path: `/${post.url}`,
      component: path.resolve(`src/templates/post/post.js`),
      context: {
        data: post,
      },
    })
  })
}
