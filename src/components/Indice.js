import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Indice.css';

const indiceList = [
  {
    id: '/faq#1',
    question: ' 1) O que é o coronavírus?'
  },
  {
    id: '/faq#2',
    question: ' 2) Como é a transmissão?'
  },
  {
    id: '/faq#3',
    question: ' 3) Quais são os sintomas que a doença causa?'
  },
  {
    id: '/faq#4',
    question: ' 4) Como previnir o coronavirus?'
  },
  {
    id: '/faq#5',
    question: ' 5) O que fazer em caso de sintomas?'
  },
  {
    id: '/faq#6',
    question: ' 6) Pessoas com o vírus, mas sem os sintomas, podem transmitir a doença?'
  },
  {
    id: '/faq#7',
    question: ' 7) É possível ser infectado com o coronavírus mais de uma vez?'
  },
  {
    id: '/faq#8',
    question: ' 8) O que as pessoas que tiveram contato com pacientes suspeitos devem fazer?'
  },
  {
    id: '/faq#9',
    question: ' 9) Por que o vírus muda?'
  },
  {
    id: '/faq#10',
    question: ' 10) Qual é o tempo de incubação do Covid-19?'
  },
  {
    id: '/faq#11',
    question: ' 11) Qual é a definição de caso suspeito?'
  },
  {
    id: '/faq#12',
    question: ' 12) O coronavírus pode matar?'
  },
  {
    id: '/faq#13',
    question: ' 13) Quanto tempo o novo coronavírus sobrevive em uma superfície ou no ar?'
  },
  {
    id: '/faq#14',
    question: ' 14) Quem deve usar máscara? Ela protege do coronavírus?'
  },
  {
    id: '/faq#15',
    question: ' 15) Usar luvas é aconselhável também?'
  },
  {
    id: '/faq#16',
    question: ' 16) Como lavar as mãos corretamente?'
  },
  {
    id: '/faq#17',
    question: ' 17) Existe algum remédio para combater o coronavírus?'
  },
  {
    id: '/faq#18',
    question: ' 18) Qual(is) remédio(s) a pessoa com Covid-19 deve tomar?'
  },
  {
    id: '/faq#19',
    question: ' 19) Existe vacina para prevenção ao coronavírus?'
  },
  {
    id: '/faq#20',
    question: ' 20) Grávidas correm mais riscos?'
  },
  {
    id: '/faq#21',
    question: ' 21) Como proteger as pessoas idosas da Covid-19?'
  },
  {
    id: '/faq#22',
    question: ' 22) Posso visitar meus amigos?'
  },
  {
    id: '/faq#23',
    question: ' 23) Bichos de estimação podem transmitir o coronavírus?'
  },
  {
    id: '/faq#24',
    question: ' 24) Quanto tempo deve durar a quarentena?'
  },
  {
    id: '/faq#25',
    question: ' 25) É importante a prática de exercícios físicos?'
  },
  {
    id: '/faq#26',
    question: ' 26) Celular é perigoso? É importante higienizá-lo também?'
  }
]

class Indice extends React.Component{
  render(){
    return(
      <div className="indice-quiz">
        <ul className="indice-ul">
          {indiceList.map((el) => 
            <li className="indice-li"><HashLink to={el.id}>{el.question}</HashLink></li>
          )}
        </ul>
      </div>
    );
  }
}

export default Indice;