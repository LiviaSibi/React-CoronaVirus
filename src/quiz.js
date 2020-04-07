import React from 'react';
import Footer from './components/Footer.js';
import Popup from "reactjs-popup";
import './quiz.css';
import {CasoSuspeito, FiqueAlerta, TudoBem, Invalido, FiqueEmCasa} from './components/PopupMessage.js'

class Quiz extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFebre: '',
        selectedSintomas: '',
        selectedMedicamento: '',
        selectedMelhora: '',
        selectedOutrosSintomas: '',
        selectedGrupodeRisco: ''
      };
  }

  handleFebreChange = (event) => {
    this.setState({ selectedFebre: event.target.value });
  };

  handleSintomasChange = (event) => {
    this.setState({ selectedSintomas: event.target.value });
  };

  handleMedicamentoChange = (event) => {
    this.setState({ selectedMedicamento: event.target.value });
  };

  handleMelhoraChange = (event) => {
    this.setState({ selectedMelhora: event.target.value });
  };

  handleOutrosSintomasChange = (event) => {
    this.setState({ selectedOutrosSintomas: event.target.value });
  };

  handleGrupodeRiscoChange = (event) => {
    this.setState({ selectedGrupodeRisco: event.target.value });
  };

  render() {
    let message = '';
    const showMessageCasoSuspeito = 
      (this.state.selectedFebre === 'sim' && this.state.selectedOutrosSintomas === 'sintomas-graves' && this.state.selectedGrupodeRisco === 'sim') 
      || (this.state.selectedFebre === 'sim' && this.state.selectedSintomas === 'sim' && this.state.selectedMedicamento === 'sim' && this.state.selectedMelhora === 'nao' && this.state.selectedOutrosSintomas === 'sintomas-graves')
      || (this.state.selectedSintomas === 'sim' && this.state.selectedMedicamento === 'sim' && this.state.selectedOutrosSintomas === 'sintomas-graves');
    const showMessageFiqueAlerta = 
      (this.state.selectedSintomas === 'sim' && this.state.selectedMedicamento === 'sim' && this.state.selectedMelhora === 'nao')
      || (this.state.selectedFebre === 'sim' && this.state.selectedSintomas === 'sim')
      || (this.state.selectedSintomas === 'sim' && this.state.selectedOutrosSintomas === 'sintomas-grave');
    const showMessageTudoBem = 
      (this.state.selectedFebre === 'nao' && this.state.selectedSintomas === 'nao' && this.state.selectedOutrosSintomas === 'nenhum-outro');
    const showMessageInvalido = 
      (this.state.selectedFebre === '' && this.state.selectedSintomas === '' && this.state.selectedMedicamento === '' && this.state.selectedMelhora === '' && this.state.selectedOutrosSintomas === '' && this.state.selectedGrupodeRisco === '')
      || (this.state.selectedFebre === '' || this.state.selectedSintomas === '' || this.state.selectedOutrosSintomas === '' || this.state.selectedGrupodeRisco === '');
    
    if(showMessageCasoSuspeito === true){
      message = <CasoSuspeito />
    }
    else if(showMessageFiqueAlerta === true){
      message = <FiqueAlerta />
    }
    else if(showMessageTudoBem === true){
      message = <TudoBem />
    }
    else if(showMessageInvalido === true){
      message = <Invalido />
    }
    else{
      message = <FiqueEmCasa />
    }

    let medicamentos = '';
    if (this.state.selectedSintomas === 'sim') {
      medicamentos =
        <fieldset onChange={this.handleMedicamentoChange.bind(this)}>
          <div className='inputGroup'>
            <label htmlFor="medicamento">Você tomou algum medicamento para seus sintomas?
              <br />
              <input name="medicamento" className="option-input radio" id="1" type="radio" value="sim" checked={this.state.selectedMedicamento === 'sim'} /> Sim
              <br />
              <input name="medicamento" className="option-input radio" id="2" type="radio" value="nao" checked={this.state.selectedMedicamento === 'nao'} /> Não
            </label>
          </div>
        </fieldset>
    }

    let melhorou = '';
    if (this.state.selectedMedicamento === 'sim') {
      melhorou =
        <fieldset onChange={this.handleMelhoraChange.bind(this)}>
          <div className='inputGroup'>
            <label htmlFor="melhora">Você melhorou?
              <br />
              <input name="melhora" className="option-input radio" id="1" type="radio" value="sim" checked={this.state.selectedMelhora === 'sim'} /> Sim
              <br />
              <input name="melhora" className="option-input radio" id="2" type="radio" value="nao" checked={this.state.selectedMelhora === 'nao'} /> Não
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
            <form onSubmit={this.handleFormSubmit}>
              <fieldset onChange={this.handleFebreChange.bind(this)}>
                <div className='inputGroup'>
                  <label htmlFor="febre">Você teve febre (acima de 37,8º)?
                    <br />
                    <input name="febre" className="option-input radio" id='1' type="radio" value="sim" checked={this.state.selectedFebre === 'sim'} />Sim
                    <br />
                    <input name="febre" className="option-input radio" id='2' type="radio" value="nao" checked={this.state.selectedFebre === 'nao'} />Não
                  </label>
                </div>
              </fieldset>

              <fieldset onChange={this.handleSintomasChange.bind(this)}>
                <div className='inputGroup'>
                  <label htmlFor="sintomas">Você teve algum dos seguintes sintomas:
                    coriza, tosse, cansaço, dor de garganta, dor de cabeça, dores no corpo, perda de olfato/paladar?
                    <br />
                    <input name="sintomas" className="option-input radio" id='1' type="radio" value="sim" checked={this.state.selectedSintomas === 'sim'} /> Sim
                    <br />
                    <input name="sintomas" className="option-input radio" id='2' type="radio" value="nao" checked={this.state.selectedSintomas === 'nao'} /> Não
                  </label>
                </div>
              </fieldset>

              {medicamentos}

              {melhorou}

              <fieldset onChange={this.handleOutrosSintomasChange.bind(this)}>
                <div className='inputGroup'>
                  <label htmlFor="outrosSintomas">Teve algum desses outros sintomas?
                    <br />
                    <input name="outrosSintomas" className="option-input radio" id="1" type="radio" value="sintomas-graves" checked={this.state.selectedOutrosSintomas === 'sintomas-graves'} /> Vomito, falta de ar ou dificuldade de respirar, dedos azulados ou palidos
                    <br />
                    <input name="outrosSintomas" className="option-input radio" id="2" type="radio" value="nenhum-outro" checked={this.state.selectedOutrosSintomas === 'nenhum-outro'} /> Não tive nenhum outro sintomas
                  </label>
                </div>
              </fieldset>

              <fieldset onChange={this.handleGrupodeRiscoChange.bind(this)}>
                <div className='inputGroup'>
                  <label htmlFor="grupoRisco">Você está grávida ou tem mais de 80 anos?
                    <br />
                    <input name="grupoRisco" className="option-input radio" id="1" type="radio" value="sim" checked={this.state.selectedGrupodeRisco === 'sim'} /> Sim
                    <br />
                    <input name="grupoRisco" className="option-input radio" id="2" type="radio" value="nao" checked={this.state.selectedGrupodeRisco === 'nao'} /> Não
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
        <Footer />
      </div>
    );
  }
}

export default Quiz;