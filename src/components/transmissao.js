import React from 'react';
import espirro from '../Imagem/espirro.png';
import tosse from '../Imagem/tosse.png';
import catarro from '../Imagem/catarro.png';
import saliva from '../Imagem/saliva.png';
import contato from '../Imagem/contato.png';
import contatoObjetos from '../Imagem/contatoObjetos.png';

const transmicao1List = [
  {
    img: espirro,
    alt: 'espirro',
    p: 'Espirro'
  },
  {
    img: tosse,
    alt: 'tosse',
    p: 'Tosse'
  },
  {
    img: catarro,
    alt: 'secreção',
    p: 'Secreções'
  }
]

const transmicao2List = [
  {
    img: saliva,
    alt: 'saliva',
    p: 'Gotículas de Saliva'
  },
  {
    img: contato,
    alt: 'contato com pessoas',
    style: {textAlign: 'left', width: '270px', marginLeft: '25px'},
    p: 'Contato próximo como toque ou aperto de mão com pessoas infectadas (caso suspeito ou confirmado)'
  },
  {
    img: contatoObjetos,
    alt: 'contato com objetos',
    style: {textAlign: 'left', width: '270px', marginLeft: '25px'},
    p: 'Contato com objeto ou superfícies contaminadas seguido de contato com boca, nariz ou olhos'
  }
]

function Transmissao(){
  return (
    <div>
      <div className="transmissão-container">
        {transmicao1List.map((el) => 
          <div className="transmissão" key={el.alt}>
            <img src={el.img} className="transmissão" alt={el.alt}/>
            <p className="transmissão-p">{el.p}</p>
          </div>
        )}
      </div>
      <div className="transmissão-container">
        {transmicao2List.map((el, index) => 
          <div className="transmissão" key={index}>
            <img src={el.img} className="transmissão" alt={el.alt}/>
            <p className="transmissão-p" style={el.style}>{el.p}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Transmissao;