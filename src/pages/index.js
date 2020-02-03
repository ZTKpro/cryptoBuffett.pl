import React from "react"
import { Helmet } from "react-helmet"
import '../components/global.css'

import Navi from '../components/navi/nav.js'
import Header from '../components/header/header.js'
import About from '../components/about/about.js'
import Promoction from '../components/promocion/promoction.js'
import Newslatter from '../components/newsletter/newsletter'
import Footer from '../components/footer/footer.js'

const IndexPage = () => (
  <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Crypto_Buffet</title>
    </Helmet>
    <Navi />
    <Header />
    <About />
    <Promoction />
    <Newslatter />
    <Footer />
  </div>
)

export default IndexPage
