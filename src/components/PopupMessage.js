import React from 'react';

export const PopupMessage = (props) => {
  return(
    <div>
      <div className="header"> {props.headerText} </div>
        <div className="content">
          {props.children}
        </div>
    </div>
  );
}

export const CasoSuspeito = () => {
  return (
    <PopupMessage headerText = " Caso Suspeito ">
      {" "}
      Seu caso parece ser suspeito de coronavírus, e identificamos alguns sinais de alarme.
      <br />
      <br />
      A orientação é que você busque atendimento em uma Unidade de Saúde perto de casa para ser avaliado por um profissional.
    </PopupMessage>
  );
}

export const FiqueAlerta = () => {
  return (
    <PopupMessage headerText = ' Fique alerta! '>
      {" "}
      Apesar de ter poucos sinais de infecção pelo coronavírus, você citou alguns sinais de alarme e precisa de uma avaliação.
      <br />
      <br />
      A orientação é que você busque atendimento em uma Unidade de Saúde perto da casa.
    </PopupMessage>
  );
}

export const TudoBem = () => {
  return (
    <PopupMessage headerText = ' Tudo bem! '>
      {" "}
      Você não aparenta ter dos nenhum sintomas causados pelo coronavírus!
      <br />
      <br />
      Mesmo que não possua nenhum sintomas não deve relaxar! O vírus é altamente contagioso e merece sua atenção e cuidado. Siga as orientações recomendadas.
      <br />
      <br />
      Cuide de sua saúde e de quem está próximo de você.
    </PopupMessage>
  );
}

export const Invalido = () => {
  return (
    <PopupMessage headerText = ' Inválido '>
      <div style={{textAlign: 'center'}}>
        {" "}
        Marque uma alternativa para receber uma resposta
      </div>
    </PopupMessage>
  );
}

export const FiqueEmCasa = () => {
  return (
    <PopupMessage headerText = ' Fique em casa! '>
      {" "}
      Você pode estar apenas com uma infecção leve e tem baixa probabilidade de ser causada pelo coronavírus. Você pode tratá-la em casa mesmo!
      <br />
      <br />
      Apenas sigas as orientações recomendadas e em caso piora procure uma Unidade de Saúde perto da casa.
    </PopupMessage>
  );
}