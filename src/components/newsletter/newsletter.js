import React,{Component} from 'react';
import './newsletter.css';


class newsletter extends Component{
    render() {
     return(
        <div className="newsletter">
            <div  className="newsletter__textbox">
                <h2>Chcesz być na bieżąco z promocjami?</h2>
                <p>Zapisz się na nasz newslleter</p>
                <a href="https://m.me/115325723262146?ref=Newslatterr"><button className="newslatter__btn btn"><p>ZAPISZ SIĘ</p></button></a>
            </div>
        </div>
     )   
    }
}
export default newsletter;