import React from 'react';
import { StaticQuery, graphql } from "gatsby";

const seoText = " Promocja jak zarobić szybie pięniadzę bankowe"

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
                        opisObrazka
                    }
                }
            }
        `}
        render={({promoction: { promocjes }}) => (
            <div>
                { promocjes.map(promocje => (
                    <div key={promocje.id} className="promoction__item">
                        <div  className="promoction__imgbox" >
                            <img src={promocje.zdjecie.url} alt={promocje.opisObrazka + seoText}></img>
                        </div>
                        <div className="promoction__textbox">
                            <h3 id="tittlePromoction">{promocje.tytul}</h3>
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