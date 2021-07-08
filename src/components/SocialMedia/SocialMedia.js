import React from "react"
// import { Link } from "gatsby"
import { Icon } from "semantic-ui-react"
import { map } from "lodash"
import socialData from "./data"
import "./SocialMedia.scss"

export default function SocialMedia() {
  return (
    <div className="social-media">
      <h1>::: Social Media:::</h1>

      {map(socialData, (social, index) => (
        <a href={social.link} target="_blank" rel="noreferer noopener">
          <Icon circular link name={social.name} className={social.name} />
        </a>
      ))}
    </div>
  )
}
