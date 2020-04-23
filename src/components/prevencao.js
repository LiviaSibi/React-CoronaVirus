import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandsWash, faHandshake, faHeadSideMask, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const prevencaoList = [
  {
    icon: faHandsWash,
    h3: ' Higiene ',
    list:
      <div>
        <p><FontAwesomeIcon icon={faAngleRight} /> Lave bem as mãos com água e sabão até pelo menos metade do pulso.</p>
        <p><FontAwesomeIcon icon={faAngleRight} /> Use álcool em gel 70% para limpar as mãos.</p>
        <p><FontAwesomeIcon icon={faAngleRight} /> Evite tocar nariz, olhos e boca antes de limpar as mãos.</p>
        <p><FontAwesomeIcon icon={faAngleRight} /> Limpe com álcool objetos tocados frequentemente como o celular.</p>
      </div>
  },
  {
    icon: faHeadSideMask,
    h3: ' Ao tossir ou espirrar ',
    list:
      <div>
        <p><FontAwesomeIcon icon={faAngleRight} /> Cubra a boca e o nariz. Use a parte interna do cotovelo.</p>
        <p><FontAwesomeIcon icon={faAngleRight} /> Utilize lenço descartável quando estiver com nariz escorrendo. Jogue-o fora logo após o uso.</p>
        <p><FontAwesomeIcon icon={faAngleRight} /> Lembre-se de lavar as mãos após tossir ou espirrar.</p>
        <p><FontAwesomeIcon icon={faAngleRight} /> Evite sair de casa.</p>
        <p><FontAwesomeIcon icon={faAngleRight} /> Use máscara caso precise sair de casa.</p>
      </div>
  },
  {
    icon: faHandshake,
    h3: ' Contato Físico ',
    list:
      <div>
        <p><FontAwesomeIcon icon={faAngleRight} /> Evite cumprimentar com aperto de mãos, abraço ou beijo no rosto.</p>
        <p><FontAwesomeIcon icon={faAngleRight} /> Evite multidões.</p>
        <p><FontAwesomeIcon icon={faAngleRight} /> Manter a distância de pelo menos um metro e meio entre pessoas.</p>
      </div>
  },
]

function Prevencao(){
  return(
    <div className="prevencao-container">
      {prevencaoList.map((el, index) => 
        <div className="prevencao" key={index}>
          <h3><FontAwesomeIcon icon={el.icon} />{el.h3}</h3>
          {el.list}
        </div>
      )}
    </div>
  )
}

export default Prevencao;