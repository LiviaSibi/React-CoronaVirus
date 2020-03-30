import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Indice.css';

class Indice extends React.Component{
  render(){
    return(
      <div className="indice">
        <ul className="indice-ul">
          <li className="indice-li"><HashLink to='/faq#question1'> 1) O que é o coronavírus?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question2'> 2) Como é a transmissão?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question3'> 3) Quais são os sintomas que a doença causa?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question4'> 4) Como previnir o coronavirus?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question5'> 5) O que fazer em caso de sintomas?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question6'> 6) Pessoas com o vírus, mas sem os sintomas, podem transmitir a doença?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question7'> 7) É possível ser infectado com o coronavírus mais de uma vez?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question8'> 8) O que as pessoas que tiveram contato com pacientes suspeitos devem fazer?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question9'> 9) Por que o vírus muda?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question10'> 10) Qual é o tempo de incubação do Covid-19?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question11'> 11) Qual é a definição de caso suspeito?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question12'> 12) O coronavírus pode matar?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question13'> 13) Quanto tempo o novo coronavirus sobrevive no ambiente?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question14'> 14) Quanto tempo o novo coronavírus sobrevive em uma superfície ou no ar?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question15'> 15) Quem deve usar máscara? Ela protege do coronavírus?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question16'> 16) Usar luvas seria uma boa ideia?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question17'> 17) Como lavar as mãos corretamente?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question18'> 18) Existe algum remédio para combater o coronavírus?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question19'> 19) Qual(is) remédio(s) a pessoa com COVID-19 deve tomar?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question20'> 20) Existe vacina para prevenção ao coronavírus?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question21'> 21) Grávidas correm mais riscos?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question22'> 22) Como proteger as pessoas idosas da Covid-19?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question23'> 23) Posso visitar meus amigos?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question24'> 24) Bichos de estimação podem transmitir o coronavírus?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question25'> 25) Quanto tempo deve durar a quarentena?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question26'> 26) Como manter a rotina de esportes?</HashLink></li>
          <li className="indice-li"><HashLink to='/faq#question27'> 27) Celular é perigoso? É importante higienizá-lo também?</HashLink></li>
        </ul>
      </div>
    );
  }
}

export default Indice;