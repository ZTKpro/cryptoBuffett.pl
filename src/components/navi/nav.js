import React,{Component} from 'react';
import './nav.css';
import {Link} from "gatsby"

import bgNav from './img/backgroundNav.png'
import NavItem from './navItem.js';

const handleScroll = () => {

    const navi = document.getElementById('nav')

    if (window.pageYOffset > 1) {navi.style.backgroundImage = `url(${bgNav})`
    }else{navi.style.backgroundImage = "" }

}

const openHiddenNav = () =>{
    const navList = document.getElementsByClassName('nav__hamburgerItem')
    const navCon = document.getElementsByClassName('nav__contentbox')

    if (navList[0].classList == "nav__hamburger-top nav__hamburgerItem") {
        navList[0].classList.add("nav__hamburger-top--active")
        navList[1].classList.add("nav__hamburger-mid--active")
        navList[2].classList.add("nav__hamburger-bottom--active")
        navCon[0].style.display = "flex"
    }else{
        navList[0].classList.remove("nav__hamburger-top--active")
        navList[1].classList.remove("nav__hamburger-mid--active")
        navList[2].classList.remove("nav__hamburger-bottom--active")
        navCon[0].style.display = "none"
    }

}

class nav extends Component{

 componentDidMount() {
     window.addEventListener("scroll", handleScroll);
 }
    
    render() {
     return(
            <nav>
                <div id="nav" className="nav__content">
                    <Link to="/"><h1 className="nav__link">Crypto_Buffett</h1></Link> 
                    <NavItem />
                    <div onClick={openHiddenNav} className="nav__hamburger">
                        <div  className="nav__hamburger-top nav__hamburgerItem"></div>
                        <div  className="nav__hamburger-mid nav__hamburgerItem"></div>
                        <div  className="nav__hamburger-bottom nav__hamburgerItem"></div>
                    </div>
                </div>
            </nav>
     )   
    }
}
export default nav;