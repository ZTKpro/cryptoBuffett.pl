import React,{Component} from 'react';
import './promoction.css';

import Gen from './renderPromo.js'

class promoction extends Component{
    render() {
     return(
        <div className="promoction">
            <h2 className="promoction__h">Promocje</h2>
            <div className="promoction__itembox">

                <Gen />

            </div>
        </div>
     )   
    }
}
export default promoction;