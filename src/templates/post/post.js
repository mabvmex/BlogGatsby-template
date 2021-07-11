import React from "react"
import BlogLayout from "../../layouts/BlogLayout"
import TransformOembedToIframe from "../../utils/TransformOembedToIframe"
import "./post.scss"

export default function Post(props) {
  const { pageContext /* : {data: post} */ } = props
  const { data: post } = pageContext

  console.log(post)
  return (
    <BlogLayout className="post">
      <h1>{post.title}</h1>
      <div className="markdown-body">
        <div
          dangerouslySetInnerHTML={{
            __html: TransformOembedToIframe(post.content),
          }}
        />
      </div>
    </BlogLayout>
  )
}
