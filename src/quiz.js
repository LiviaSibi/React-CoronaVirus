import React from 'react';
import Footer from './components/Footer.js';

class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            febre:[
                {id: 1, value: "sim", isChecked: false},
                {id: 2, value: "nao", isChecked: false}
            ],
            
            sintomas:[
                {id: 1, value: "coriza", isChecked: false},
                {id: 2, value: "nariz-entupido", isChecked: false},
                {id: 3, value: "cansaco", isChecked: false},
                {id: 4, value: "tosse", isChecked: false},
                {id: 5, value: "dor-de-cabeca", isChecked: false},
                {id: 6, value: "dor-corpo", isChecked: false},
                {id: 6, value: "diarreia-dor", isChecked: false},
                {id: 6, value: "perda-olfato", isChecked: false},
                {id: 6, value: "perda-paladar", isChecked: false}
            ],

            medicamento:[
                {id: 1, value: "sim", isChecked: false},
                {id: 2, value: "nao", isChecked: false}
            ],
            melhora:[
                {id: 1, value: "sim", isChecked: false},
                {id: 2, value: "nao", isChecked: false}
            ],
            outrosSintomas:[
                {id: 1, value: "sintomas-grave", isChecked: false},
                {id: 2, value: "nenhum-outro", isChecked: false}
            ],
            grupoRisco:[
                {id: 1, value: "sim", isChecked: false},
                {id: 2, value: "nao", isChecked: false}
            ]
        };
    }

    handleCheckElement = (event) => {
        let febre = this.state.febre
        febre.forEach(febre => {
            if (febre.value === event.target.value)
                febre.isChecked =  event.target.checked
        })
        this.setState({febre: febre});

        let sintomas = this.state.sintomas
        sintomas.forEach(sintomas => {
            if (sintomas.value === event.target.value)
            sintomas.isChecked =  event.target.checked
        })
        this.setState({sintomas: sintomas});

        let medicamento = this.state.medicamento
        medicamento.forEach(medicamento => {
            if (medicamento.value === event.target.value)
            medicamento.isChecked =  event.target.checked
        })
        this.setState({medicamento: medicamento});

        let melhora = this.state.melhora
        melhora.forEach(melhora => {
            if (melhora.value === event.target.value)
            melhora.isChecked =  event.target.checked
        })
        this.setState({melhora: melhora});

        let outrosSintomas = this.state.outrosSintomas
        outrosSintomas.forEach(outrosSintomas => {
            if (outrosSintomas.value === event.target.value)
            outrosSintomas.isChecked =  event.target.checked
        })
        this.setState({outrosSintomas: outrosSintomas});

        let grupoRisco = this.state.grupoRisco
        grupoRisco.forEach(grupoRisco => {
            if (grupoRisco.value === event.target.value)
            grupoRisco.isChecked =  event.target.checked
        })
        this.setState({grupoRisco: grupoRisco});
    }


    render(){
        let melhora = '';
        if (this.state.medicamento.selectedOption) {
            melhora = 
            <label for="melhora">Você melhorou?
            <br/>
                <input name="melhora" id="1" type="radio" value="sim" checked={this.state.melhora.isChecked} onClick={this.handleCheckElement}/> Sim 
                <input name="melhora" id="2" type="radio" value="nao" checked={this.state.melhora.isChecked} onClick={this.handleCheckElement}/> Não 
            </label>;
        } else {
            melhora = '';
        }


        return(
            <div className="quiz" style={{textAlign: 'center'}}>
                <main>
                    <h2>Mini Consulta</h2>
                    <p>Devo procurar uma unidade médica?</p>
                    <p>Abaixo teremos um pequeno questionario relacionado ao coronavírus para identificar se você precisa procurar uma 
                        unidade médica ou se apenas tomar alguns cuidados em sua casa</p>

                    <div class="quiz">
                        <form onSubmit={this.handleFormSubmit}>
                            <label for="febre">Você teve febre (acima de 37,8º)?
                            <br/>
                                <input name="febre" id='1' type="radio" value="sim" checked={this.state.febre.isChecked} onClick={this.handleCheckElement}/> Sim 
                                <input name="febre" id='2' type="radio" value="nao" checked={this.state.febre.isChecked} onClick={this.handleCheckElement}/> Não 
                            </label>

                            <br/>
                            <br/>

                            <label for="sintomas">Você teve algum desses sintomas?
                            <br/>
                                <input name="sintomas" id="1" type="checkbox" value="coriza" checked={this.state.sintomas.isChecked} onClick={this.handleCheckElement}/> Coriza 
                                <input name="sintomas" id="2" type="checkbox" value="nariz-entupido" checked={this.state.sintomas.isChecked} onClick={this.handleCheckElement}/> Nariz entupido 
                                <input name="sintomas" id="3" type="checkbox" value="cansaco" checked={this.state.sintomas.isChecked} onClick={this.handleCheckElement}/> Cansaço 
                                <input name="sintomas" id="4" type="checkbox" value="tosse" checked={this.state.sintomas.isChecked} onClick={this.handleCheckElement}/> Tosse 
                                <input name="sintomas" id="5" type="checkbox" value="dor-de-cabeca" checked={this.state.sintomas.isChecked} onClick={this.handleCheckElement}/> Dor de cabeça 
                                <input name="sintomas" id="6" type="checkbox" value="dor-corpo" checked={this.state.sintomas.isChecked} onClick={this.handleCheckElement}/> Dores no corpo
                                <input name="sintomas" id="7" type="checkbox" value="diarreia-dor" checked={this.state.sintomas.isChecked} onClick={this.handleCheckElement}/> Diarréia ou dores abdominais
                                <input name="sintomas" id="8" type="checkbox" value="perda-olfato" checked={this.state.sintomas.isChecked} onClick={this.handleCheckElement}/> Perda de olfato (não sentir cheiro)
                                <input name="sintomas" id="9" type="checkbox" value="perda-paladar" checked={this.state.sintomas.isChecked} onClick={this.handleCheckElement}/> Perda do paladar (não sentir gosto)
                            </label>

                            <br/>
                            <br/>

                            <label for="medicamento">Você tomou algum medicamento para seus sintomas?
                            <br/>
                                <input name="medicamento" id="1" type="radio" value="sim" checked={this.state.medicamento.isChecked} onClick={this.handleCheckElement}/> Sim 
                                <input name="medicamento" id="2" type="radio" value="nao" checked={this.state.medicamento.isChecked} onClick={this.handleCheckElement}/> Não 
                            </label>

                            {melhora}

                            <br/>
                            <br/>

                            <label for="outrosSintomas">Teve algum desses outros sintomas?
                            <br/>
                                <input name="outrosSintomas" id="1" type="radio" value="sintomas-grave" checked={this.state.outrosSintomas.isChecked} onClick={this.handleCheckElement}/> Vomito ou falta de ar ou dificuldade de respirar ou dedos azulados ou palidos 
                                <input name="outrosSintomas" id="2" type="radio" value="nenhum-outro" checked={this.state.outrosSintomas.isChecked} onClick={this.handleCheckElement}/> Não tive nenhum outro sintomas 
                            </label>
                            
                            <br/>
                            <br/>

                            <label for="grupoRisco">Você está grávida ou tem mais de 80 anos?
                            <br/>
                                <input name="grupoRisco" id="1" type="radio" value="sim"/> Sim 
                                <input name="grupoRisco" id="2" type="radio" value="nao"/> Não 
                            </label>

                            <input type="submit" value="Enviar Questionário" />
                        </form>
                    </div>
                </main>

                <Footer/>
            </div>
        );
    }
}

export default Quiz;