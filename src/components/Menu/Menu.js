import React from "react"
import { Link } from "gatsby"
import SocialMedia from "../SocialMedia/SocialMedia"
import "./Menu.scss"

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/">
        <h2>::: Dev Blog :::</h2>
      </Link>
      <p>
        [Internet] [Tecnología] [Web Dev] [SciFi] [Apps] [Gadgets] [CyberSec]
        [Gaming] [Tacos] [Cine] [Software] [Libros] [Código] [Futurología]
        [VR/AR] [Linux] [Hactivismo] [AI] [Mundo Digital] [OS]
      </p>
      <SocialMedia />
      <h5> Lista de cursos u OTRA COSA</h5>
    </div>
  )
}
