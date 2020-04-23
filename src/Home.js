import React from 'react';
import './App.css';
import Transmissao from './components/transmissao.js';
import Prevencao from './components/prevencao.js';
import Sintomas from './components/sintomas.js';

const homeList = [
  {
    id: 'introducao',
    h2: 'O que é?',
    content: 
    <div className="text">
      <p>Os coronavírus são uma grande família viral, conhecidos desde meados de 1960, que causam infecções respiratórias 
          em seres humanos e em animais. Os primeiros coronavírus humanos foram isolados pela primeira vez em 1937. No entanto, 
          foi em 1965 que o vírus foi descrito como coronavírus, em decorrência do perfil na microscopia, parecendo uma coroa.</p>
      <p>O novo agente do coronavírus foi descoberto em 31/12/19 após casos registrados na 
          China. Provocando assim a doença chamada de coronavírus ou COVID-19.</p>
    </div>
  },
  {
    id: 'transmissao',
    h2: 'Como a transmissão ocorre?',
    content: 
      <div>
        <p className="text" style={{ padding: '0 0 2em 0'}}>A incubação do coronavírus é de 2 a 14 dias, e sua transmissão ocorre principalmente durante os sintomas. A transmissão pode ocorrer pelo ar ou por contato com secreções de pessoas doentes.</p>
        <Transmissao />
      </div>
  },
  {
    id: 'prevencao',
    h2: 'Prevenção',
    style: {textAlign:'center',  margin: '-1px 0px'},
    content: 
      <div>
        <p>Como evitar se contaminar ou transmitir o vírus</p>
        <Prevencao />
      </div>
  },
  {
    id:'sintomas',
    h2: 'Sintomas',
    style: {textAlign:'center',  margin: '-1px 0px'},
    content: <Sintomas />
  }
]

class Home extends React.Component {
  render(){
    return (
      <div className="Home">
        <main>
          {homeList.map((el) => 
            <section id={el.id} key={el.id}>
              <h2 style={el.style}>{el.h2}</h2>
              {el.content}
            </section>
          )}
        </main>
      </div>
    );
  }
}

export default Home;