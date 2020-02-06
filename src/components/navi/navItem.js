import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import loupe from './img/loupe.png'

const searchCollapse = (e) =>{

    const navContent = document.getElementById('navContent')
    const searchInput = document.getElementById('searchInput')
    const navInput = document.getElementById('navInput')
 
    if(navInput.style.display === ""){

        searchInput.style.width = "150px"
        searchInput.style.borderRadius = "10px"
        navInput.style.display = "block"
        if (window.innerWidth > 600){navContent.style.width = "55%"}
    
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

const closeNav = (e) =>{
    const navContent = document.getElementById("navContent")
    if (window.innerWidth < 600) { navContent.style.display = "none" }
}

const navItem = () => {
    return(
        <div id="navContent"  className="nav__contentbox">
            
                        <Link onClick={closeNav} to="aboutUs"
                            spy={true}
                            smooth={true}
                            offset={-50}
                        ><p className="nav__link">O nas</p></Link> 
                        <Link onClick={closeNav} to="promoctionBox"
                            spy={true}
                            smooth={true}
                            offset={-50}
                        ><p className="nav__link">Szybkie Metody Zarobku</p></Link> 
                        <Link to="promoctionBox"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            >
                            <div id="searchInput"  className="nav__loupe btn">
                                <img onClick={searchCollapse} className="nav__loupeimg" src={loupe} alt="magnetfier"></img>
                                <input onChange={search} id="navInput" className="nav__input" type="text" />
                            </div> 
                        </Link>
                    </div>
    )
}
export default navItem