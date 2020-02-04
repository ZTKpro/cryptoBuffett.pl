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
                </div>
            </nav>
     )   
    }
}
export default nav;