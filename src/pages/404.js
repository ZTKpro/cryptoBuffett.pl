import React from "react"
import Navi from '../components/navi/nav.js'
import '../components/404.css'

const NotFoundPage = () => (
  <div className="badurl">
    <Navi />
    <div  className="badurl__boxcenter">
      <h2>404</h2>
      <p>Przepraszamy ta strona nie istnieje.</p>
      <div className="badurl__btnbox">
        <div className="badurl__btn">Strona Główna</div>
        <div className="badurl__btn">Kontakt</div>
      </div>
    </div>

  </div>
)

export default NotFoundPage
