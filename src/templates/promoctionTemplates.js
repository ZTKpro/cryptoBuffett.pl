import React from "react"
import Footer from '../components/footer/footer'
import loupe from '../components/navi/img/loupe.png'
import './promoctionTemplates.css'

const openHiddenNav = () => {
    const navList = document.getElementsByClassName('nav__hamburgerItem')
    const navCon = document.getElementsByClassName('nav__contentbox')

    if (navList[0].classList == "nav__hamburger-top nav__hamburgerItem") {
        navList[0].classList.add("nav__hamburger-top--active")
        navList[1].classList.add("nav__hamburger-mid--active")
        navList[2].classList.add("nav__hamburger-bottom--active")
        navCon[0].style.display = "flex"
    } else {
        navList[0].classList.remove("nav__hamburger-top--active")
        navList[1].classList.remove("nav__hamburger-mid--active")
        navList[2].classList.remove("nav__hamburger-bottom--active")
        navCon[0].style.display = "none"
    }

}

const closeNav = (e) =>{
    const navContent = document.getElementById("navContent")
    if (window.innerWidth < 600) { navContent.style.display = "none" }
}

const promoctionTemplates = ({pageContext:{data}}) => (
    <div className="templates">
        <div className = "nav__content" >
            <a href="/"><h2 className="nav__link navTemp_h2">Crypto_Buffet</h2></a> 
            <div id="navContent"  className="nav__contentbox">
        
                    <a href="/" ><p className="nav__link">O nas</p></a> 
                    <a onClick={closeNav} to="/"><p className="nav__link">Szybkie Metody Zarobku</p></a> 
                    <a href="/" >
                        <div id="searchInput"  className="nav__loupe btn">
                            <img  className="nav__loupeimg" src={loupe} alt="magnetfier"></img>
                            <input  id="navInput" className="nav__input" type="text" />
                        </div> 
                    </a>
                </div>
            <div onClick={openHiddenNav} className="nav__hamburger">
                <div  className="nav__hamburger-top nav__hamburgerItem"></div>
                <div  className="nav__hamburger-mid nav__hamburgerItem"></div>
                <div  className="nav__hamburger-bottom nav__hamburgerItem"></div>
            </div>
        </div>
        <div className="templates__box">
            <img className="templates__img" src={data.zdjecie.url} alt={data.opisObrazka}></img>
            <p className="templates__importanttext">{data.wazneInformacje}</p>
            <h3 className="templates__tittle">Instrukcja</h3>
            <p className="templates__howtoearn">
                {data.pierwszyKrok}
                <a className="templates__link" target="_blank" href={data.link}>{data.link}</a>
                {data.jakNaTymZarobic}
            </p>
        </div>
        <div className="templates__help">
            <h3 className="templates__tittle templates__helph">Potrzebujesz pomocy?</h3>
            <a href="https://m.me/115325723262146?ref=Lista%20promo" target="_blank"><div className="templates__btn btn">NAPISZ</div></a>
        </div>
        <Footer className="templates__footer"/>
    </div>    
)

export default promoctionTemplates
