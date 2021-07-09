import React from "react"
import { Button } from "semantic-ui-react"
import { useStaticQuery, graphql } from "gatsby"
import BlogLayout from "../layouts/BlogLayout"

export default function Home() {
  const result = useStaticQuery(graphql`
    query {
      allStrapiPost {
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
  `)

  console.log(result)

  return (
    <BlogLayout>
      <h1> Esto es la HOME del Blog </h1>
      <p> ::: esto es un parrafo ::: </p>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </BlogLayout>
  )
}
