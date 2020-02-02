import React,{Component} from 'react';
import './footer.css';


class footer extends Component{
    render() {
     return(
        <footer>
            <div className="footer">
                <div className="footer__newspromoction">
                    <h3>Najnowsze promocje:</h3>
                    <ul>
                        <li className="footer__item">
                            <p className="footer__itemtittle">Twisto czyli 50zł w 5minut</p>
                            <p className="footer__itemdata">15.10.2020</p>
                        </li>
                    </ul>
                </div>
                <div className="footer__fanpage"></div>
            </div>
        </footer>
     )   
    }
}
export default footer;