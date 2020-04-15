import React from 'react';
import Popup from "reactjs-popup";
import './quiz.css';
import {CasoSuspeito, FiqueAlerta, TudoBem, Invalido, FiqueEmCasa} from './components/PopupMessage.js'

function isNull(field){
  return field === null;
}

function isTrue(field){
  return field === true;
}

function isFalse(field){
  return field === false;
}
class Quiz extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        hasFebre: null,
        hasSintomas: null,
        hasMedicamento: null,
        hasMelhora: null,
        hasSintomasGraves: null,
        isGrupodeRisco: null
      };
      
    this.handleFebreChange = this.handleFebreChange.bind(this);
    this.handleSintomasChange = this.handleSintomasChange.bind(this);
    this.handleMedicamentoChange = this.handleMedicamentoChange.bind(this);
    this.handleMelhoraChange = this.handleMelhoraChange.bind(this);
    this.handleSintomasGravesChange = this.handleSintomasGravesChange.bind(this);
    this.handleGrupodeRiscoChange = this.handleGrupodeRiscoChange.bind(this);
  }

  handleFebreChange = (event) => {
    const hasFebre = event.currentTarget.value === 'true'? true : false;
    this.setState({ hasFebre });
  };

  handleSintomasChange = (event) => {
    const hasSintomas = event.currentTarget.value === 'true'? true : false;
    this.setState({ hasSintomas });
  };

  handleMedicamentoChange = (event) => {
    const hasMedicamento = event.currentTarget.value === 'true'? true : false;
    this.setState({ hasMedicamento });
  };

  handleMelhoraChange = (event) => {
    const hasMelhora = event.currentTarget.value === 'true'? true : false;
    this.setState({ hasMelhora });
  };

  handleSintomasGravesChange = (event) => {
    const hasSintomasGraves = event.currentTarget.value === 'true'? true : false;
    this.setState({ hasSintomasGraves });
  };

  handleGrupodeRiscoChange = (event) => {
    const isGrupodeRisco = event.currentTarget.value === 'true'? true : false;
    this.setState({ isGrupodeRisco });
  };

  render() {
    const { hasFebre, hasSintomas, hasMedicamento, hasMelhora, hasSintomasGraves, isGrupodeRisco } = this.state;
    const allForm = [hasFebre, hasSintomas, hasMedicamento, hasMelhora, hasSintomasGraves, isGrupodeRisco];
    const basicForm = [hasFebre, hasSintomas, hasSintomasGraves, isGrupodeRisco];
    const hasAllSintomas = [hasFebre, hasSintomas, hasSintomasGraves];
    const hasSintomasBasicos = [hasSintomas, hasSintomasGraves];
    let message = '';

    const showMessageCasoSuspeito = 
      (hasFebre && hasSintomasGraves && isGrupodeRisco) 
      || (hasAllSintomas.every(isTrue) && hasMedicamento && !hasMelhora) 
      || (hasSintomasBasicos.every(isTrue) && hasMedicamento);

    const showMessageFiqueAlerta = (hasSintomas && hasMedicamento && !hasMelhora) || (hasFebre && hasSintomas) 
      || (hasSintomasBasicos.every(isTrue));

    const showMessageTudoBem = (hasAllSintomas.every(isFalse));

    const showMessageInvalido = allForm.every(isNull) || basicForm.some(isNull);
    
    if(showMessageCasoSuspeito){
      message = <CasoSuspeito />
    }
    else if(showMessageFiqueAlerta){
      message = <FiqueAlerta />
    }
    else if(showMessageTudoBem){
      message = <TudoBem />
    }
    else if(showMessageInvalido){
      message = <Invalido />
    }
    else{
      message = <FiqueEmCasa />
    }

    let medicamentos = '';
    if (hasSintomas) {
      medicamentos =
        <fieldset>
          <div className='inputGroup'>
            <label htmlFor="medicamento">Você tomou algum medicamento para seus sintomas?
              <br />
              <input name="medicamento" className="option-input radio" id="1" type="radio" value="true" checked={hasMedicamento === true} onChange={this.handleMedicamentoChange}/> Sim
              <br />
              <input name="medicamento" className="option-input radio" id="2" type="radio" value="false" checked={hasMedicamento === false} onChange={this.handleMedicamentoChange}/> Não
            </label>
          </div>
        </fieldset>
    }

    let melhorou = '';
    if (hasMedicamento) {
      melhorou =
        <fieldset>
          <div className='inputGroup'>
            <label htmlFor="melhora">Você melhorou?
              <br />
              <input name="melhora" className="option-input radio" id="1" type="radio" value="true" checked={hasMelhora === true} onChange={this.handleMelhoraChange}/> Sim
              <br />
              <input name="melhora" className="option-input radio" id="2" type="radio" value="false" checked={hasMelhora === false} onChange={this.handleMelhoraChange}/> Não
            </label>
          </div>
        </fieldset>;
    }

    return (
      <div className="quiz" style={{ textAlign: 'center', zIndex: '1' }}>
        <main>
          <h1 style={{ fontFamily: 'Roboto, sansSerif', padding: '70px 0px 30px 0px' }}>O que fazer?</h1>
          <h2 className='quiz-h2'>Devo procurar uma unidade médica?</h2>
          <p className='text1'>Abaixo teremos um pequeno questionario relacionado ao coronavírus para identificar se você precisa procurar uma
              unidade médica ou se apenas tomar alguns cuidados em sua casa.</p>

          <div className="quiz">
            <form>
              <fieldset>
                <div className='inputGroup'>
                  <label htmlFor="febre">Você teve febre (acima de 37,8º)?
                    <br />
                    <input name="febre" className="option-input radio" id='1' type="radio" value="true" checked={hasFebre === true} onChange={this.handleFebreChange}/>Sim
                    <br />
                    <input name="febre" className="option-input radio" id='2' type="radio" value="false" checked={hasFebre === false} onChange={this.handleFebreChange}/>Não
                  </label>
                </div>
              </fieldset>

              <fieldset>
                <div className='inputGroup'>
                  <label htmlFor="sintomas">Você teve algum dos seguintes sintomas:
                    coriza, tosse, cansaço, dor de garganta, dor de cabeça, dores no corpo, perda de olfato/paladar?
                    <br />
                    <input name="sintomas" className="option-input radio" id='1' type="radio" value="true" checked={hasSintomas === true} onChange={this.handleSintomasChange}/> Sim
                    <br />
                    <input name="sintomas" className="option-input radio" id='2' type="radio" value="false" checked={hasSintomas === false} onChange={this.handleSintomasChange}/> Não
                  </label>
                </div>
              </fieldset>

              {medicamentos}

              {melhorou}

              <fieldset>
                <div className='inputGroup'>
                  <label htmlFor="sintomasGraves">Teve algum desses outros sintomas?
                    <br />
                    <input name="sintomasGraves" className="option-input radio" id="1" type="radio" value="true" checked={hasSintomasGraves === true} onChange={this.handleSintomasGravesChange}/> Vomito, falta de ar ou dificuldade de respirar, dedos azulados ou palidos
                    <br />
                    <input name="sintomasGraves" className="option-input radio" id="2" type="radio" value="false" checked={hasSintomasGraves === false} onChange={this.handleSintomasGravesChange}/> Não tive nenhum outro sintomas
                  </label>
                </div>
              </fieldset>

              <fieldset>
                <div className='inputGroup'>
                  <label htmlFor="grupoRisco">Você está grávida ou tem mais de 80 anos?
                    <br />
                    <input name="grupoRisco" className="option-input radio" id="1" type="radio" value="true" checked={isGrupodeRisco === true} onChange={this.handleGrupodeRiscoChange}/> Sim
                    <br />
                    <input name="grupoRisco" className="option-input radio" id="2" type="radio" value="false" checked={isGrupodeRisco === false} onChange={this.handleGrupodeRiscoChange}/> Não
                  </label>
                </div>
              </fieldset>

            </form>
            <Popup trigger={<button className="enviar"> Enviar </button>} modal>
              {close => (
                <div className="modal">
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                  {message}
                  <button className="enviar" onClick={() => { close() }}> Voltar </button>
                </div>
              )}
            </Popup>
          </div>
        </main>
      </div>
    );
  }
}

export default Quiz;