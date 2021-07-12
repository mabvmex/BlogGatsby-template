import React from "react"
import { graphql } from "gatsby"
import PostList from "../components/PostList/PostList"
import Pagination from "../components/Pagination"
import BlogLayout from "../layouts/BlogLayout"
import imageBlog from "../images/jpg/unsplash-geek.jpeg"
import Seo from "../components/seo"

export default function Blog(props) {
  const { data, pageContext } = props
  const posts = data.allStrapiPost.nodes

  return (
    <BlogLayout>
      <Seo
        title="Internet y tecnología"
        description="Internet, tecnología, gadgets, libros, software, apps, web dev, sci-fi, gaming, tacos, cine, software, código, futuro, VR, AR, AI, Linux, hacktivismo, cybersec, ciberseguridad, OS, Mundo y cultura digital y más."
        image={imageBlog}
      />
      <PostList posts={posts} />
      <Pagination pageContext={pageContext} />
    </BlogLayout>
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
        url
        createdAt
        miniature {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`
