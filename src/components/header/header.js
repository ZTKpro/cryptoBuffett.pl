import React,{Component} from 'react';
import './header.css';
import { Link, animateScroll as scroll } from "react-scroll";

class header extends Component{
    render() {
     return(
        <header>
            <div className="header__background">
                <div className="header__textcenter">
                    <h2>Sprawdz najnowsze promocje</h2>
                    <p>I zarób nawet kilka tysięcy złotych!</p>
                </div>
                <Link to="promoctionBox"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            >
                    <div className="header__button btn">
                        <p>SPRAWDZ</p> 
                    </div>
                </Link>
            </div>
        </header>   
     )   
    }
}
export default header;