import React from "react"
import { graphql } from "gatsby"

export default function Blog(props) {
  const { data } = props
  const posts = data.allStrapiPost.nodes
  console.log(posts)

  return (
    <div>
      <h1>::: ESTAMOS EN EL BLOG :::</h1>
    </div>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allStrapiPost(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        id
        title
        content
        createdAt
        miniatura {
          formats {
            thumbnail {
              url
            }
          }
        }
      }
    }
  }
`
