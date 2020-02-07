import React from "react"
import Navi from '../components/navi/nav.js'
import Footer from '../components/footer/footer'
import './promoctionTemplates.css'

const promoctionTemplates = ({pageContext:{data}}) => (
    <div className="templates">
        <Navi />
        <div className="templates__box">
            <img className="templates__img" src={data.zdjecie.url} alt={data.opisObrazka}></img>
            <p className="templates__importanttext">{data.wazneInformacje}</p>
            <h3 className="templates__tittle">Instrukcja</h3>
            <p className="templates__howtoearn">{data.jakNaTymZarobic}</p>
        </div>
        <Footer className="templates__footer"/>
    </div>    
)

export default promoctionTemplates
