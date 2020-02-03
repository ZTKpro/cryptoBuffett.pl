import React,{Component} from 'react';
import './nav.css';
import { Link, animateScroll as scroll } from "react-scroll";

import loupe from './img/loupe.png'
import bgNav from './img/backgroundNav.png'

const handleScroll = () => {

    const navi = document.getElementById('nav')

    if (window.pageYOffset > 1) {navi.style.backgroundImage = `url(${bgNav})`
    }else{navi.style.backgroundImage = "" }

}

const searchCollapse = (e) =>{

    const navContent = document.getElementById('navContent')
    const searchInput = document.getElementById('searchInput')
    const navInput = document.getElementById('navInput')

    if(navInput.style.display === ""){

        searchInput.style.width = "150px"
        searchInput.style.borderRadius = "10px"
        navContent.style.width = "55%"
        navInput.style.display = "block"
    
    }else{

        searchInput.style.width = ""
        searchInput.style.borderRadius = ""
        navContent.style.width = ""
        navInput.style.display = ""    

    }

}

const search = (e) =>{
    const listItem = [...document.querySelectorAll("#tittlePromoction")]
    const currentWord = e.target.value.toUpperCase();
    let result = listItem;
    result = result.filter(listItem => listItem.textContent.toUpperCase().includes(currentWord))
     for (let i = 0; i < listItem.length; i++) {
        listItem[i].parentElement.parentElement.style.display = "none"
        listItem[i].parentElement.parentElement.style.borderBottom = "none"
     }
    for(let i = 0;i < result.length; i++){
        result[i].parentElement.parentElement.style.display = ""
    }
    document.getElementById("showMore").style.display = "none"
} 

class nav extends Component{

 componentDidMount() {
     window.addEventListener("scroll", handleScroll);
 }
    
    render() {
     return(
            <nav>
                <div id="nav" className="nav__content">
                    <Link to="/http://localhost:8000"><h1 className="nav__link">Crypto_Buffett</h1></Link> 
                    <div id="navContent" className="nav__contentbox">
                        <Link to="aboutUs"
                            spy={true}
                            smooth={true}
                            offset={-50}
                        ><p className="nav__link">O nas</p></Link> 
                        <Link to="promoctionBox"
                            spy={true}
                            smooth={true}
                            offset={-50}
                        ><p className="nav__link">Szybkie Metody Zarobku</p></Link> 
                        <div id="searchInput"  className="nav__loupe btn">
                            <Link to="promoctionBox"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            ><img onClick={searchCollapse} className="nav__loupeimg" src={loupe} alt="magnetfier"></img></Link>
                            <input onChange={search} id="navInput" className="nav__input" type="text" />
                        </div> 
                    </div>
                </div>
            </nav>
     )   
    }
}
export default nav;