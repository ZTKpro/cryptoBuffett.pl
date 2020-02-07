import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby";

const seoText = " Promocja jak zarobić szybie pięniadzę bankowe"

const genPromoction = () =>(
    <StaticQuery
        query={graphql`
            query {    
                promoction {
                    promocjs {
                        id
                        tytul
                        krotkiOpis
                        createdAt
                        zdjecie {
                            id
                            url
                        }
                        opisObrazka
                        podstrona
                    }
                }
            }
        `}
        render={({promoction: { promocjs }}) => (
            <div>
                { promocjs.map(promocj => (
                    <div key={promocj.id} className="promoction__item">
                            <div  className="promoction__imgbox" >
                                <img src={promocj.zdjecie.url} alt={promocj.opisObrazka + seoText}></img>
                            </div>
                        <Link to={promocj.podstrona}>
                            <div className="promoction__textbox">
                                <h3 id="tittlePromoction">{promocj.tytul}</h3>
                                <p>{promocj.krotkiOpis}</p>
                                <p>11 listopad 2020</p>
                            </div>
                        </Link>
                    </div>
                    ))  }
            </div>
        )}
    />
)

export default genPromoction;