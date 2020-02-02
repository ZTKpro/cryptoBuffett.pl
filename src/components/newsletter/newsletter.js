import React,{Component} from 'react';
import './newsletter.css';


class newsletter extends Component{
    render() {
     return(
        <div className="newsletter">
            <div  className="newsletter__textbox">
                <h2>Chcesz być na bieżąco z promocjami?</h2>
                <p>Zapisz się na nasz newslleter</p>
                <div className="newsletter__inputbox">
                    <input placeholder="Email" type="email" />
                    <button className="btn"><p>ZAPISZ SIĘ</p></button>
                </div>
                <div className="newsletter__checkdiv">
                    <input className="newsletter__checbox" type="checkbox" />
                    <p>Chcę zapisać się do newslettera, a co za tym idzie wyrażam zgodę na 
                        otrzymywanie na mój adres e-mail informacji o nowościach, promocjach, 
                        produktach i usługach Crypto Buffeta.
                    </p>
                </div>
            </div>
        </div>
     )   
    }
}
export default newsletter;