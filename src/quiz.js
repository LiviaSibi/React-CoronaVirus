import React from 'react';
import Footer from './components/Footer.js';
import Popup from "reactjs-popup";
import './quiz.css';

class Quiz extends React.Component{
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

    handleFebreChange=(event)=> {
        console.log(event.target.value);
        this.setState({
            selectedFebre: event.target.value
        });
    };

    handleSintomasChange=(event)=> {
        console.log(event.target.value);
        this.setState({
            selectedSintomas: event.target.value
        });
    };

    handleMedicamentoChange=(event)=> {
        console.log(event.target.value);
        this.setState({
            selectedMedicamento: event.target.value
        });
    };

    handleMelhoraChange=(event)=> {
        console.log(event.target.value);
        this.setState({
            selectedMelhora: event.target.value
        });
    };

    handleOutrosSintomasChange=(event)=> {
        console.log(event.target.value);
        this.setState({
            selectedOutrosSintomas: event.target.value
        });
    };

    handleGrupodeRiscoChange=(event)=> {
        console.log(event.target.value);
        this.setState({
            selectedGrupodeRisco: event.target.value
        });
    };

    render(){
        let mensagem = '';
        let febre = this.state.selectedFebre;
        let sintomas = this.state.selectedSintomas;
        let medicamento = this.state.selectedMedicamento;
        let melhora = this.state.selectedMelhora;
        let outros = this.state.selectedOutrosSintomas;
        let grupo = this.state.selectedGrupodeRisco;
        if(febre === 'sim' && outros === 'sintomas-graves' && grupo === 'sim'){
            mensagem = 
            <div>
                <div className="header"> Caso Suspeito </div>
                <div className="content">
                    {" "}
                    Seu caso parece ser suspeito de coronavírus, e identificamos alguns sinais de alarme.
                    <br />
                    A orientação é que você busque atendimento em uma Unidade de Saúde perto de casa para ser avaliado por um profissional.
                </div>
            </div>
        }
        else if(febre === 'sim' && sintomas === 'sim' && medicamento === 'sim' && melhora === 'nao' && outros === 'sintomas-graves'){
            mensagem = 
            <div>
            <div className="header"> Caso Suspeito </div>
                <div className="content">
                    {" "}
                    Seu caso parece ser suspeito de coronavírus, e identificamos alguns sinais de alarme.
                    <br />
                    A orientação é que você busque atendimento em uma Unidade de Saúde perto de casa para ser avaliado por um profissional.
                </div>
            </div>        }
        else if(sintomas === 'sim' && medicamento === 'sim' && outros === 'sintomas-graves'){
            mensagem = 
            <div>
            <div className="header"> Caso Suspeito </div>
                <div className="content">
                    {" "}
                    Seu caso parece ser suspeito de coronavírus, e identificamos alguns sinais de alarme.
                    <br />
                    A orientação é que você busque atendimento em uma Unidade de Saúde perto de casa para ser avaliado por um profissional.
                </div>
            </div>        }
        else if(sintomas === 'sim' && medicamento === 'sim' && melhora === 'nao'){
            mensagem = 
            <div>
            <div className="header"> Fique alerta! </div>
                <div className="content">
                    {" "}
                    Apesar de ter poucos sinais de infecção pelo coronavírus, você citou alguns sinais de alarme e precisa de uma avaliação.
                    <br />
                    A orientação é que você busque atendimento em uma Unidade de Saúde perto da casa.
                </div>
            </div>
        }
        else if(febre === 'sim' && sintomas === 'sim'){
            mensagem = 
            <div>
            <div className="header"> Fique alerta! </div>
                <div className="content">
                    {" "}
                    Apesar de ter poucos sinais de infecção pelo coronavírus, você citou alguns sinais de alarme e precisa de uma avaliação.
                    <br />
                    A orientação é que você busque atendimento em uma Unidade de Saúde perto da casa.
                </div>
            </div>        }
        else if(sintomas === 'sim' && outros === 'sintomas-grave'){
            mensagem = 
            <div>
            <div className="header"> Fique alerta! </div>
                <div className="content">
                    {" "}
                    Apesar de ter poucos sinais de infecção pelo coronavírus, você citou alguns sinais de alarme e precisa de uma avaliação.
                    <br />
                    A orientação é que você busque atendimento em uma Unidade de Saúde perto da casa.
                </div>
            </div>        
        }
        else if(febre === 'nao' && sintomas === 'nao' && outros === 'nenhum-outro'){
            mensagem = 
            <div>
            <div className="header"> Tudo bem! </div>
                <div className="content">
                    {" "}
                    Você não aparenta ter dos nenhum sintomas que causam o coronavírus!
                    <br />
                    Mesmo que não possua nenhum sintomas não deve relaxar! O vírus é altamente contagioso e merece sua atenção e cuidado. Siga as orientações recomendadas.
                    <br/>
                    Cuide de sua saúde e de quem está próximo de você.
                </div>
            </div>        
        }
        else if(febre === '' && sintomas === '' && medicamento === '' && melhora === '' && outros === '' && grupo === ''){
            mensagem = 
            <div>
            <div className="header"> Inválido </div>
                <div className="content">
                    {" "}
                    Marque uma alternativa para receber uma resposta
                    <br />
                </div>
            </div>        
        }
        else if(febre === '' || sintomas === '' || outros === '' || grupo === ''){
            mensagem = 
            <div>
            <div className="header"> Inválido </div>
                <div className="content">
                    {" "}
                    Marque uma alternativa para receber uma resposta
                    <br />
                </div>
            </div>        
        }
        else{
            mensagem = 
            <div>
                <div className="header"> Fique em casa! </div>
                <div className="content">
                    {" "}
                    Você pode estar apenas com uma infecção leve e tem baixa probabilidade de ser causada pelo coronavírus. Você pode tratá-la em casa mesmo!
                    <br />
                    Apenas sigas as orientações recomendadas e em caso piora procure uma Unidade de Saúde perto da casa.
                </div>
            
            </div>
        }

        let medicamentos = '';
        if (this.state.selectedSintomas === 'sim') {
            medicamentos = 
            <fieldset onChange={this.handleMedicamentoChange.bind(this)}>
                <div className='inputGroup'>
                <label htmlFor="medicamento">Você tomou algum medicamento para seus sintomas?
                <br/>
                    <input name="medicamento" className="option-input radio" id="1" type="radio" value="sim" checked={this.state.selectedMedicamento === 'sim'} /> Sim 
                    <br/>
                    <input name="medicamento" className="option-input radio" id="2" type="radio" value="nao" checked={this.state.selectedMedicamento === 'nao'} /> Não 
                </label>
                </div>
            </fieldset>
        } else {
            medicamentos = '';
        };

        let melhorou = '';
        if (this.state.selectedMedicamento === 'sim') {
            melhorou = 
            <fieldset onChange={this.handleMelhoraChange.bind(this)}>
                <div className='inputGroup'>
                <label htmlFor="melhora">Você melhorou?
                <br/>
                    <input name="melhora" className="option-input radio" id="1" type="radio" value="sim" checked={this.state.selectedMelhora === 'sim'} /> Sim 
                    <br/>
                    <input name="melhora" className="option-input radio" id="2" type="radio" value="nao" checked={this.state.selectedMelhora === 'nao'} /> Não 
                </label>
                </div>
            </fieldset>;
        } else {
            melhorou = '';
        };

        return(
            <div className="quiz" style={{textAlign: 'center'}}>
                <main>
                    <h1 style={{fontFamily: 'Roboto, sansSerif', padding:'70px 0px 30px 0px'}}>O que fazer?</h1>
                    <h2 style={{margin: '-1px 250px'}}>Devo procurar uma unidade médica?</h2>
                    <p className='text1'>Abaixo teremos um pequeno questionario relacionado ao coronavírus para identificar se você precisa procurar uma 
                        unidade médica ou se apenas tomar alguns cuidados em sua casa.</p>

                    <div className="quiz">
                        <form onSubmit={this.handleFormSubmit}>
                            <fieldset onChange={this.handleFebreChange.bind(this)}>
                                <div className='inputGroup'>
                                <label htmlFor="febre">Você teve febre (acima de 37,8º)?
                                <br/>
                                    <input name="febre" className="option-input radio" id='1' type="radio" value="sim" checked={this.state.selectedFebre === 'sim'} />Sim
                                    <br/>
                                    <input name="febre" className="option-input radio" id='2' type="radio" value="nao" checked={this.state.selectedFebre === 'nao'} />Não 
                                </label>
                                </div>
                            </fieldset>

                            <fieldset onChange={this.handleSintomasChange.bind(this)}>
                                <div className='inputGroup'>
                                    <label htmlFor="sintomas">Você teve algum dos seguintes sintomas:
                                    coriza, tosse, cansaço, dor de garganta, dor de cabeça, dores no corpo, perda de olfato/paladar?
                                    <br/>
                                        <input name="sintomas" className="option-input radio" id='1' type="radio" value="sim" checked={this.state.selectedSintomas === 'sim'} /> Sim 
                                        <br/>
                                        <input name="sintomas" className="option-input radio" id='2' type="radio" value="nao" checked={this.state.selectedSintomas === 'nao'} /> Não 
                                    </label>
                                </div>
                            </fieldset>

                            {medicamentos}

                            {melhorou}

                            <fieldset onChange={this.handleOutrosSintomasChange.bind(this)}>
                                <div className='inputGroup'>
                                <label htmlFor="outrosSintomas">Teve algum desses outros sintomas?
                                <br/>
                                    <input name="outrosSintomas" className="option-input radio" id="1" type="radio" value="sintomas-graves" checked={this.state.selectedOutrosSintomas === 'sintomas-graves'} /> Vomito ou falta de ar ou dificuldade de respirar ou dedos azulados ou palidos 
                                    <br/>
                                    <input name="outrosSintomas" className="option-input radio" id="2" type="radio" value="nenhum-outro" checked={this.state.selectedOutrosSintomas === 'nenhum-outro'} /> Não tive nenhum outro sintomas 
                                </label>
                                </div>
                            </fieldset>

                            <fieldset onChange={this.handleGrupodeRiscoChange.bind(this)}>
                                <div className='inputGroup'>
                                <label htmlFor="grupoRisco">Você está grávida ou tem mais de 80 anos?
                                <br/>
                                    <input name="grupoRisco" className="option-input radio" id="1" type="radio" value="sim" checked={this.state.selectedGrupodeRisco === 'sim'} /> Sim 
                                    <br/>
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
                                    {mensagem}
                                    <button
                                    className="enviar"
                                    onClick={() => {
                                    console.log("modal closed ");
                                    close();
                                    }}
                                >
                                    Voltar
                                </button>
                                </div>
                                
                                )}
                            </Popup>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Quiz;