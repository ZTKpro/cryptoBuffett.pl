import React,{Component} from 'react';
import './promoction.css';

import Arrow from './img/arrow.png'
import Gen from './renderPromo.js'

const hiddenItem = () =>{
    const listPromoction = document.getElementsByClassName("promoction__item")
    if(listPromoction.length > 3){
        listPromoction[2].style.borderBottom = "none"
        for(let i = 3; i<listPromoction.length;i++){
            listPromoction[i].style.display ="none"
        }
    }
}

const showMore = (e) => {
    const listPromoction = document.getElementsByClassName("promoction__item")
    for(let i = 0;i < listPromoction.length;i++){
        listPromoction[i].style.display = ""
    }
    e.target.style.display = "none"
}

class promoction extends Component{

    componentDidMount(){ 
        hiddenItem()
    }
    render() {

        return(
            <div className="promoction">
                <h2 id="promoctionBox"  className="promoction__h">Promocje</h2>
                <div className="promoction__itembox">
                    <Gen />
                    <div id="showMore" onClick={showMore} className="promoction__showmore btn">
                        <img src={Arrow} alt="arrow"></img>
                    </div>
                </div>
            </div>
        )   
    }

}
export default promoction;