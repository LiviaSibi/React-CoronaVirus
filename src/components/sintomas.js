import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToiletPaper, faHeadSideCough, faThermometerFull, faDiagnoses, faBoxTissue, faLungsVirus} from '@fortawesome/free-solid-svg-icons'

const sintomasList = [
  {
    icon: faHeadSideCough,
    p: ' Tosse (seca ou com secreção)'
  },
  {
    icon: faThermometerFull,
    p: ' Febre (acima de 37,8º)'
  },
  {
    icon: faDiagnoses,
    p: ' Dores no corpo'
  },
  {
    icon: faBoxTissue,
    p: ' Congestionamento nasal'
  },
  {
    icon: faLungsVirus,
    p: ' Dificuldade respiratória'
  },
  {
    icon: faToiletPaper,
    p: ' Diarréia'
  },
]

function Sintomas() {
  return(
    <div className="sintomas-container">
      {sintomasList.map((el, index) => 
        <div className="sintomas" key={index}>
          <p><FontAwesomeIcon icon={el.icon} />{el.p}</p>
        </div>
      )}
    </div>
  )
}

export default Sintomas;