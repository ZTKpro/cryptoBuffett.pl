import React from "react"
import { Link } from "gatsby"
import '../components/global.css'

import Navi from '../components/navi/nav.js'
import Header from '../components/header/header.js'
import About from '../components/about/about.js'
import Promoction from '../components/promocion/promoction.js'
import Newslatter from '../components/newsletter/newsletter'
import Footer from '../components/footer/footer.js'

const IndexPage = () => (
  <div>
    <Navi />
    <Header />
    <About />
    <Promoction />
    <Newslatter />
    <Footer />
  </div>
)

export default IndexPage
