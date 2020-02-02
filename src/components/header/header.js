import React,{Component} from 'react';
import './header.css';

class header extends Component{
    render() {
     return(
        <header>
            <div className="header__background">
                <div className="header__textcenter">
                    <h2>Sprawdz najnowsze promocje</h2>
                    <p>I zarób nawet kilka tysięcy złotych!</p>
                </div>
                <div className="header__button btn">
                    <p>SPRAWDZ</p> 
                </div>
            </div>
        </header>   
     )   
    }
}
export default header;