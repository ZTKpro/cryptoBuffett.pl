import React,{Component} from 'react';
import './about.css';

const readMore = (e) => {
   const hiddenElement = document.getElementsByClassName("about__hidden")
   e.target.style.display = "none"
   hiddenElement[0].style.display = "block"
}

class about extends Component{
    render() {
     return(
        <div id="aboutUs" className="about">
           <h3>O nas</h3>
           <p>Jesteśmy średniej wielkości zjednoczeniem specjalistów z szeroko pojętych dziedzin - 
               online marketingu, programów partnerskich i afiliacyjnych. Pomagamy zaprzyjaźnionym firmom wdrążać promocje marketingowe i sprawować nad nimi opiekę i kontrolę.<span onClick={readMore} className="about__readmore">Czytaj więcej</span><span className="about__hidden"> Większość naszych członków teamu z tematem zarabiania 
               online jest związana od co najmniej 7 lat, praktykując wszelkiego rodzaju oferty promocyjne firm Startup-owych oraz tych bardziej dojrzałych korporacji. Aktualnie pracujemy również pod szyldem - " Crypto_Buffett"
               i skupiamy się głównie nad dodawaniem sprawdzonych i efektywnych możliwości zarobkowych dla naszych obserwujących członków i subskrybentów. Wszystkie nasze patenty zarobkowe są sprawdzane przez naszych 
               specjalistów oraz starannie obrabiane w celu wyciągnięcia z danej promocji jak najwyższej kwoty w jak najkrótszym czasie.                 
               Obserwując nasze promocje i korzystając z nich na bieżąco jesteś w stanie sobie porządnie dorobić do miesięcznej wypłaty lub przy trochę większym wysiłku zastąpić całkowicie prace na etacie!</span></p> 
        </div>
     )   
    }
}
export default about;