import React,{Component} from 'react';
import './newsletter.css';

let emailIsValid = false;

const validateemail = (e) =>{
    if(e.target.value.length < 3){
        e.target.style.boxShadow = "0px 0px 10px red"
        e.target.style.border = "1px solid red"
        e.target.style.color = "red"
    }else{
        e.target.style.boxShadow = ""
        e.target.style.border = ""
        e.target.style.color = ""
        emailIsValid = true
        return emailIsValid;
    }
    
}

const checkIn = () =>{
    alert(emailIsValid)
}

class newsletter extends Component{
    render() {
     return(
        <div className="newsletter">
            <div  className="newsletter__textbox">
                <h2>Chcesz być na bieżąco z promocjami?</h2>
                <p>Zapisz się na nasz newslleter</p>
                <div className="newsletter__inputbox">
                    <label htmlFor="newslatter">
                        <input id="newslatter" onChange={validateemail} className="newsletter__input" placeholder="Email" name="newslatter" type="email" />
                    </label>
                    <button onClick={checkIn} className="btn"><p>ZAPISZ SIĘ</p></button>
                </div>
                <div className="newsletter__checkdiv">
                    <input className="newsletter__checbox" type="checkbox" />
                    <p>Chcę zapisać się do newslettera, a co za tym idzie wyrażam zgodę na 
                        otrzymywanie na mój adres e-mail informacji o nowościach, promocjach, 
                        produktach i usługach Crypto Buffeta.
                    </p>
                </div>
            </div>
            <div className="newsletter__thanks">Dziękujemy za zajerestrowanie się do naszego newslattera</div>
        </div>
     )   
    }
}
export default newsletter;