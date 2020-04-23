import React from 'react';
import lavarMão1 from '../Imagem/LavarMão1.PNG';
import lavarMão2 from '../Imagem/LavarMão2.PNG';
import lavarMão3 from '../Imagem/LavarMão3.PNG';
import lavarMão4 from '../Imagem/LavarMão4.PNG';
import lavarMão5 from '../Imagem/LavarMão5.PNG';
import lavarMão6 from '../Imagem/LavarMão6.PNG';
import lavarMão7 from '../Imagem/LavarMão7.PNG';
import lavarMão8 from '../Imagem/LavarMão8.PNG';
import lavarMão9 from '../Imagem/LavarMão9.PNG';
import lavarMão10 from '../Imagem/LavarMão10.PNG';
import lavarMão11 from '../Imagem/LavarMão11.PNG';
import lavarMão12 from '../Imagem/LavarMão12.PNG';

const laveMaoList = [
  {
    img: lavarMão1,
    alt: 'Molhe as mãos',
    p: 'Molhe as mãos'
  },
  {
    img: lavarMão2,
    alt: 'Aplique sabão',
    p: 'Aplique sabão'
  },
  {
    img: lavarMão3,
    alt: 'Esfregue as palmas',
    p: 'Esfregue as palmas'
  },
  {
    img: lavarMão4,
    alt: 'Esfregue por 20 segundos',
    p: 'Esfregue por 20 segundos'
  },
  {
    img: lavarMão5,
    alt: 'Esfregue entre os dedos',
    p: 'Esfregue entre os dedos'
  },
  {
    img: lavarMão6,
    alt: 'Esfregue os dedos na palma das mãos',
    p: 'Esfregue os dedos na palma das mãos'
  },
  {
    img: lavarMão7,
    alt: 'Esfregue os dedões',
    p: 'Esfregue os dedões'
  },
  {
    img: lavarMão8,
    alt: 'Lave a ponta dos dedos e unhas',
    p:  'Lave a ponta dos dedos e unhas'
  },
  {
    img: lavarMão9,
    alt: 'Retire o sabão com água',
    p: 'Retire o sabão com água'
  },
  {
    img: lavarMão10,
    alt: 'Seque com papel',
    p: 'Seque com papel'
  },
  {
    img: lavarMão11,
    alt: 'Use o papel para fechar a torneira',
    p: 'Use o papel para fechar a torneira'
  },
  {
    img: lavarMão12,
    alt: 'Tudo Limpo!',
    p: 'Tudo Limpo!'
  }
]

function LavarAMao(){
  return(
    <div className="laveMao-container">
      {laveMaoList.map((el, index) => 
        <div className="laveMao-p" key={index}>
          <img src={el.img} className="lavarMão" alt={el.alt}/> <p>{el.p}</p>
        </div>
      )}
    </div>
  )
}

export default LavarAMao;