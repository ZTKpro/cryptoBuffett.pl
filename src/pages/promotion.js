import React from "react"
import { Link } from "gatsby"

import Navi from '../components/navi/nav.js'

const Promotion = () => (
  <div>
    <Navi />
    <h1>Promotion</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Promotion
