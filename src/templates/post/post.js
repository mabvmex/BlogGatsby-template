import React from "react"
import "./post.scss"

export default function Post(props) {
  const { pageContext /* : {data: post} */ } = props
  const { data: post } = pageContext

  console.log(post)
  return (
    <div>
      <h1>::: Estamos en la página del post :::</h1>
    </div>
  )
}
