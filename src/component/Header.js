import React from 'react'
import { Link } from 'react-router-dom'
import{HashLink} from "react-router-hash-link"

const Header = () => {
  return (
  <nav>
    <h1>Design!</h1>
    <main>
    <HashLink  smooth to="/#home">Home</HashLink>
    <HashLink smooth to="/#about">About</HashLink>
    <HashLink  smooth to="/#brands">Brands</HashLink>
    <Link  to="/Services">Services</Link>
    <HashLink smooth to="/#conect">Conect</HashLink>
    </main>
  </nav>
  )
}


export default Header
