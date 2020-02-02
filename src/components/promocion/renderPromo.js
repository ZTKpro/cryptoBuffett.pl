import React,{Component} from 'react';
import { StaticQuery, graphql } from "gatsby";

const genPromoction = () =>(
    <StaticQuery
        query={graphql`
            query {    
                promoction {
                    promocjes {
                        id
                        tytul
                        krotkiOpis
                        createdAt
                        zdjecie {
                            id
                            url
                        }
                    }
                }
            }
        `}
        render={({promoction: { promocjes }}) => (
            <div>
                { promocjes.map(promocje => (
                    <div className="promoction__item">
                        <div  className="promoction__imgbox" >
                            <img src={promocje.zdjecie.url} alt="promoction"></img>
                        </div>
                        <div className="promoction__textbox">
                            <h3>{promocje.tytul}</h3>
                            <p>{promocje.krotkiOpis}</p>
                            <p>11 listopad 2020</p>
                        </div>
                    </div>
                    ))  }
            </div>
        )}
    />
)

export default genPromoction;