import React,{Component} from 'react';
import './nav.css';
import { Link } from "gatsby"

import loupe from './img/loupe.png'
import bgNav from './img/backgroundNav.png'


const handleScroll = () => {

    const navi = document.getElementById('nav')

    if (window.pageYOffset > 1) {navi.style.backgroundImage = `url(${bgNav})`
    }else{navi.style.backgroundImage = "" }

}

const search = (e) =>{

    const navContent = document.getElementById('navContent')
    const searchInput = document.getElementById('searchInput')
    const navInput = document.getElementById('navInput')

    if(navInput.style.display == ""){

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



class nav extends Component{

 componentDidMount() {
     window.addEventListener("scroll", handleScroll);
 }
    
    render() {
     return(
            <nav>
                <div id="nav" className="nav__content">
                    <Link to="/"><h1>Crypto_Buffett</h1></Link> 
                    <div id="navContent" className="nav__contentbox">
                        <Link to="/"><p>O nas</p></Link> 
                        <Link to="/promotion/"><p>Szybkie Metody Zarobku</p></Link> 
                        <Link to="/"><p>Blog</p></Link> 
                        <div id="searchInput" onClick={search} className="nav__loupe btn">
                            <img src={loupe} alt="magnetfier"></img>
                            <input id="navInput" className="nav__input" type="text" />
                        </div> 
                    </div>
                </div>
            </nav>
     )   
    }
}
export default nav;