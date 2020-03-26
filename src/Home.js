import React from 'react';
import { Element } from 'react-scroll'
import espirro from './Imagem/espirro.png';
import tosse from './Imagem/tosse.png';
import catarro from './Imagem/catarro.png';
import saliva from './Imagem/saliva.png';
import contato from './Imagem/contato.png';
import contatoObjetos from './Imagem/contatoObjetos.png';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsWash, faHandshake, faHeadSideMask, faHeadSideCough, faThermometerFull, faDiagnoses, faBoxTissue, faLungsVirus, faAngleRight } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
    render(){
    
        return (
        <div className="Home">
        <Header/>

        <main>
            <Element id='/home/introducao' name='introducao'>
                <section id={'introducao'}>
                    <h2>O que é?</h2>
                    <div className="text">
                    <p>Os coronavírus são uma grande família viral, conhecidos desde meados de 1960, que causam infecções respiratórias 
                        em seres humanos e em animais. Os primeiros coronavírus humanos foram isolados pela primeira vez em 1937. No entanto, 
                        foi em 1965 que o vírus foi descrito como coronavírus, em decorrência do perfil na microscopia, parecendo uma coroa.</p>
                    <p>O novo agente do coronavírus foi descoberto em 31/12/19 após casos registrados na 
                        China. Provocando assim a doença chamada de coronavírus ou COVID-19.</p>
                    </div>
                </section>
            </Element>

            <Element id='/home/transmissao' name='transmissao'>
                <section id={'transmissao'}>
                    <h2>Como a transmissão ocorre?</h2>
                    <p className="text" style={{textIndent: '0px', padding: '0 0 2em 0'}}>A incubação do coronavírus é de 2 a 14 dias, e sua transmissão ocorre principalmente durante os sintomas. A transmissão pode ocorrer pelo ar ou por contato com secreções de pessoas doentes.</p>
                    <div className="transmissão-container">
                    <div className="icone">
                        <img src={espirro} className="transmissão" alt="espirro"/>
                        <p className="icone-p">Espirro</p>
                    </div>

                    <div className="icone">
                        <img src={tosse} className="transmissão" alt="tosse"/>
                        <p className="icone-p">Tosse</p>
                    </div>

                    <div className="icone">
                        <img src={catarro} className="transmissão" alt="secreção"/>
                        <p className="icone-p">Secreções</p>
                    </div>
                    </div>

                    <div className="transmissão-container">
                    <div className="icone">
                        <img src={saliva} className="transmissão" alt="saliva"/>
                        <p className="icone-p">Gotículas de Saliva</p>
                    </div>

                    <div className="icone">
                        <img src={contato} className="transmissão" alt="contato com pessoas"/>
                        <p className="icone-p">Contato próximo como toque ou aperto de mão com pessoas infectadas (caso suspeito ou confirmado)</p>
                    </div>

                    <div className="icone">
                        <img src={contatoObjetos} className="transmissão" alt="contato com objetos"/>
                        <p className="icone-p">Contato com objeto ou superfícies contaminadas seguido de contato com boca, nariz ou olhos</p>
                    </div>
                    </div>
                </section>
            </Element>

            <Element id='/home/prevencao' name='prevencao'>
                <section id={'prevencao'}>
                    <h2>Prevenção</h2>
                    <p>Como evitar se contaminar ou transmitir o vírus</p>

                    <div className="container-geral">
                    <div className="container">
                        <h3>Higiene <FontAwesomeIcon icon={faHandsWash} /></h3>
                        <p><FontAwesomeIcon icon={faAngleRight} /> Lave bem as mãos com água e sabão até pelo menos metade do pulso.</p>
                        <p><FontAwesomeIcon icon={faAngleRight} /> Use álcool 70% para limpar as mãos.</p>
                        <p><FontAwesomeIcon icon={faAngleRight} /> Evite tocar nariz, olhos e boca antes de limpar as mãos.</p>
                        <p><FontAwesomeIcon icon={faAngleRight} /> Limpe com álcool objetos tocados frequentemente como o celular.</p>
                    </div>

                    <div className="container">
                        <h3>Ao tossir ou espirrar <FontAwesomeIcon icon={faHeadSideMask} /></h3>
                        <p><FontAwesomeIcon icon={faAngleRight} /> Cubra a boca e o nariz. Use a parte interna do cotovelo.</p>
                        <p><FontAwesomeIcon icon={faAngleRight} /> Utilize lenço descartável quando estiver com nariz escorrendo. Jogue-o fora logo após o uso.</p>
                        <p><FontAwesomeIcon icon={faAngleRight} /> Lembre-se de lavar as mãos após tossir ou espirrar.</p>
                        <p><FontAwesomeIcon icon={faAngleRight} /> Use máscara caso apresente sintomas.</p>
                        <p><FontAwesomeIcon icon={faAngleRight} /> Evite sair de casa, caso apresente algum sintoma da gripe.</p>
                    </div>

                    <div className="container">
                        <h3>Contato Físico <FontAwesomeIcon icon={faHandshake} /></h3>
                        <p><FontAwesomeIcon icon={faAngleRight} /> Evite cumprimentar com aperto de mãos, abraço ou beijo no rosto.</p>
                        <p><FontAwesomeIcon icon={faAngleRight} /> Evite multidões.</p>
                        <p><FontAwesomeIcon icon={faAngleRight} /> Manter a distância de um metro de pessoas espirrando ou tossindo.</p>
                    </div>
                    </div>
                </section>
            </Element>

            <Element id='/home/sintomas' name='sintomas'>
                <section id={'sintomas'}>
                    <h2>Sintomas</h2>
                    <div className="sintomas">
                    <div className="box">
                        <p><FontAwesomeIcon icon={faHeadSideCough} /> Tosse <br/>(seca ou com secreção)</p>
                    </div>
                    <div className="box">
                        <p><FontAwesomeIcon icon={faThermometerFull} /> Febre <br/>(acima de 37,8º)</p>
                    </div>

                    <div className="box">
                        <p><FontAwesomeIcon icon={faDiagnoses} /> Dores no corpo</p>
                    </div>

                    <div className="box">
                        <p><FontAwesomeIcon icon={faBoxTissue} /> Congestionamento nasal</p>
                    </div>

                    <div className="box">
                        <p><FontAwesomeIcon icon={faLungsVirus} /> Dificuldade respiratória</p>
                    </div>
                    </div>
                </section>
            </Element>
        </main>

        <Footer />

        </div>
        );
    }
}

export default Home;