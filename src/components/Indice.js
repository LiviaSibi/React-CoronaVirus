import React from 'react';
import Scroll from 'react-scroll';
import './Indice.css';

const ScrollLink = Scroll.Link

class Indice extends React.Component{
    render(){
        return(
            <div className="indice">
                <ul className="indice-ul">
                    <li className="indice-li"><a href="#question-1"> 1) O que é o coronavírus?</a></li>
                    <li className="indice-li"><a href="#question-2"> 2) Como é a transmissão?</a></li>
                    <li className="indice-li"><a href="#question-3"> 3) Quais são os sintomas que a doença causa?</a></li>
                    <li className="indice-li"><a href="#question-4"> 4) Como previnir o coronavirus?</a></li>
                    <li className="indice-li"><a href="#question-5"> 5) O que fazer em caso de sintomas?</a></li>
                    <li className="indice-li"><a href="#question-6"> 6) Pessoas com o vírus, mas sem os sintomas, podem transmitir a doença?</a></li>
                    <li className="indice-li"><a href="#question-7"> 7) É possível ser infectado com o coronavírus mais de uma vez?</a></li>
                    <li className="indice-li"><a href="#question-8"> 8) O que as pessoas que tiveram contato com pacientes suspeitos devem fazer?</a></li>
                    <li className="indice-li"><a href="#question-9"> 9) Por que o vírus muda?</a></li>
                    <li className="indice-li"><a href="#question-10"> 10) Qual é o tempo de incubação do Covid-19?</a></li>
                    <li className="indice-li"><a href="#question-11"> 11) Qual é a definição de caso suspeito?</a></li>
                    <li className="indice-li"><a href="#question-12"> 12) O coronavírus pode matar?</a></li>
                    <li className="indice-li"><a href="#question-13"> 13) Quanto tempo o novo coronavirus sobrevive no ambiente?</a></li>
                    <li className="indice-li"><a href="#question-14"> 14) Quanto tempo o novo coronavírus sobrevive em uma superfície ou no ar?</a></li>
                    <li className="indice-li"><a href="#question-15"> 15) Quem deve usar máscara? Ela protege do coronavírus?</a></li>
                    <li className="indice-li"><a href="#question-16"> 16) Usar luvas seria uma boa ideia?</a></li>
                    <li className="indice-li"><a href="#question-17"> 17) Como lavar as mãos corretamente?</a></li>
                    <li className="indice-li"><a href="#question-18"> 18) Existe algum remédio para combater o coronavírus?</a></li>
                    <li className="indice-li"><a href="#question-19"> 19) Qual(is) remédio(s) a pessoa com COVID-19 deve tomar?</a></li>
                    <li className="indice-li"><a href="#question-20"> 20) Existe vacina para prevenção ao coronavírus?</a></li>
                    <li className="indice-li"><a href="#question-21"> 21) Grávidas correm mais riscos?</a></li>
                    <li className="indice-li"><a href="#question-22"> 22) Como proteger as pessoas idosas da Covid-19?</a></li>
                    <li className="indice-li"><a href="#question-23"> 23) Posso visitar meus amigos?</a></li>
                    <li className="indice-li"><a href="#question-24"> 24) Bichos de estimação podem transmitir o coronavírus?</a></li>
                    <li className="indice-li"><a href="#question-25"> 25) Quanto tempo deve durar a quarentena?</a></li>
                    <li className="indice-li"><a href="#question-26"> 26) Como manter a rotina de esportes?</a></li>
                    <li className="indice-li"><a href="#question-27"> 27) Celular é perigoso? É importante higienizá-lo também?</a></li>
                </ul>
            </div>
        );
    }
}

export default Indice;