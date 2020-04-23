import React from 'react';
import Indice from './components/Indice.js';
import LavarAMao from './components/laveMao.js';
import './components/Indice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const faqList =[
  {
    id: 1,
    question: '1) O que é o coronavírus?',
    answer:
      <div>
        <p>Coronavírus é o nome de uma grande família de vírus que tem uma estrutura em formato de coroa, conhecida desde 1960. Eles causam infecções respiratórias. </p>
        <p>A doença causada pelo novo coronavírus recebeu o nome de Covid-19. Ela foi descoberta no final de dezembro de 2019, na China. </p>
      </div>
  },
  {
    id: 2,
    question: '2) Como é a transmissão?',
    answer: 
      <div>
        <p>Pode ocorrer de três formas: </p>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> Por vias respiratórias, pelo ar e por gotículas provenientes de espirros e da fala de indivíduos infectados;</p>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> Por contato físico, quando essas gotículas com o vírus alcançam mucosas do olho, nariz e boca por meio de beijos, abraços e apertos de mão;</p>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> Por meio do contato de superfícies contaminadas, quando essas gotículas com o vírus ficam depositadas em locais como um corrimão ou uma maçaneta, e depois entram em contato com mucosas do olho, nariz e boca.</p>
      </div>
  },
  {
    id: 3,
    question: '3) Quais são os sintomas que a doença causa?',
    answer: 
      <div>
        <p>Tosse seca, febre e cansaço são os principais sintomas, mas alguns pacientes podem sentir dores no corpo, congestionamento nasal, inflamação na garganta ou diarreia.</p>
        <p>Nos casos mais graves, que geralmente ocorrem em pessoas que já apresentam outras doenças crônicas, há síndrome respiratória aguda e insuficiência renal.</p>
      </div>
  },
  {
    id: 4,
    question: '4) Como previnir o coronavirus?',
    answer: 
      <div>
        <p>Higienizar as mãos e superfícies, como móveis e corrimão, são as principais formas de se prevenir contra o novo coronavírus. Mesmo com as mãos limpas, evitar tocar mucosas de olhos, nariz e boca. Além disso, é preciso limpar regularmente o ambiente e mantê-lo ventilado.</p>
        <p>O Ministério da Saúde alerta também para que não seja feito o compartilhamento de itens pessoais, como talheres e toalhas. Também é recomendável manter a uma distância mínima de dois metros de pessoas que estejam espirrando ou tossindo.</p>
      </div>
  },
  {
    id: 5,
    question: '5) O que fazer em caso de sintomas?',
    answer: 
      <div>
        <p>Assim que surgirem os primeiros sintomas, o paciente deve procurar o serviço de saúde mais próximo da sua residência. O profissional vai avaliar se os sintomas podem indicar alguma probabilidade de infecção por coronavírus, coletar material para diagnóstico e iniciar o tratamento.</p>
        <p>Seus sintomas são parecidos com os de outros vírus e não existe tratamento específico para infecções por coronavírus até o momento. Dessa forma, no caso do novo coronavírus é indicado:</p>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> Repouso;</p>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> Hidratação (ingestão de bastante água e líquidos);</p>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> Medidas adotadas para aliviar os sintomas, conforme cada caso, como: uso de medicamento para dor e febre (antitérmicos e analgésicos); uso de umidificador no quarto; tomar banho quente para auxiliar no alívio da dor de garganta e tosse.</p>
        <p>Pacientes com sintomas mais intensos ou graves podem ser hospitalizados. O diagnóstico cabe ao médico responsável.</p>
      </div>
  },
  {
    id: 6,
    question: '6) Pessoas com o vírus, mas sem os sintomas, podem transmitir a doença?',
    answer: 
      <div>
        <p>De acordo com a Organização Mundial de Saúde (OMS), a transmissão de uma pessoa assintomática é rara. O modo de contágio mais comum é por meio de pacientes que apresentam os sintomas de Covid-19.</p>
        <p>Segundo o Ministério da Saúde, casos assintomáticos e durante o período de incubação não são contagiosos. No entanto, o próprio ministério informa que há dados que sugerem que a transmissão pode ocorrer mesmo sem o aparecimento de sinais e sintomas.</p>
        <p>O ministério ainda destaca que é possível haver transmissão por quem apresentou sintomas mesmo após eles já terem acabado. Nesse caso, o período de transmissão ainda é desconhecido.</p>
      </div>
  },
  {
    id: 7,
    question: '7) É possível ser infectado com o coronavírus mais de uma vez?',
    answer: 
      <div>
        <p>Os cientistas ainda não têm essa resposta de forma concreta. Houveram casos de pessoas que foram infectadas pelo segunda vez em outros países. Porém, de acordo com a evidência científica atual, a probabilidade de uma reinfecção é remota.</p>
        <p>Por ora, as evidências indicam que a Covid-19 é mesmo uma doença que só se pega uma vez. O corpo parece desenvolver uma memória imunológica para ilimina-lo caso o coronavírus tente uma segunda invasão.</p>
      </div>
  },
  {
    id: 8,
    question: '8) O que as pessoas que tiveram contato com pacientes suspeitos devem fazer?',
    answer: 
      <div>
        <p>Valem as dicas básicas de cuidados de prevenção e prestar atenção em eventuais sinais ou sintomas. Caso aconteça, é fundamental procurar um serviço de saúde.</p>
      </div>
  },
  {
    id: 9,
    question: '9) Por que o vírus muda?',
    answer: 
      <div>
        <p>Os vírus, de uma forma geral, quando se replicam podem sofrer mutações. É uma característica dos vírus de uma forma geral. Até o momento, não houve detecção de nenhuma mutação que mudasse a característica da apresentação da doença. Ou seja, nenhuma mutação que tornasse esse vírus mais agressivo. Temos o mesmo comportamento da doença desde a sua descoberta na China, até os casos atuais, inclusive o vírus brasileiro que foi sequenciado com as mesmas características.</p>
      </div>
  },
  {
    id: 10,
    question: '10) Qual é o tempo de incubação do Covid-19?',
    answer: 
      <div>
        <p>O "período de incubação" significa o tempo entre o ser humano captura o vírus e o início dos sintomas da doença.</p>
        <p>De acordo com a Organização Mundial da Saúde (OMS), a maioria das estimativas do período de incubação do Covid-19 varia de 1 a 14 dias, geralmente em torno de 5 dias.</p>
      </div>
  },
  {
    id: 11,
    question: '11) Qual é a definição de caso suspeito?',
    answer: 
      <div>
        <p>Podem ser considerados suspeitos os casos que se enquadrem em uma dessas duas situações:</p>
        <p>1) indivíduos que voltaram de qualquer viagem internacional e, em até 14 dias, apresentaram febre e pelo menos um sintoma respiratório; </p>
        <p>2) contato próximo com caso suspeito ou confirmado para Covid-19, nos últimos 14 dias, e que apresente febre ou algum sintoma respiratório, como tosse, dificuldade para respirar, produção de escarro, congestão nasal, coriza, por exemplo.</p>
      </div>
  },
  {
    id: 12,
    question: '12) O coronavírus pode matar?',
    answer: 
      <div>
        <p>O óbito pode ocorrer em virtude de complicações da infecção, como por exemplo, insuficiências respiratórias. De acordo com dados da Organização Mundial da Saúde (OMS), o novo coronavírus apresentava uma taxa média de letalidade de 3,6%.</p>
        <p>A taxa de letalidade entre idosos acima de 80 anos pode passar de 15%, e entre os jovens é menor que 0,5%.</p>
      </div>
  },
  {
    id: 13,
    question: '13) Quanto tempo o novo coronavírus sobrevive em uma superfície ou no ar?',
    answer: 
      <div>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> <strong>Aço inoxidável:</strong> 72 horas (3 dias)</p>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> <strong>Plástico:</strong> 72 horas (3 dias)</p>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> <strong>Papelão:</strong> 24 horas (1 dia)</p>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> <strong>Cobre:</strong> 4 horas</p>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> <strong>Aerossolizada/Poeiras:</strong> 40 minutos a 2 horas 30 minutos</p>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> <strong>Tecidos:</strong> não há estudos sobre a viabilidade do vírus em diferentes tipos de tecidos. Mas, de forma geral, os vírus podem sobreviver de 72 a 96 horas (3 a 4 dias) nos panos.</p>
        <p>A higienização com produtos de limpeza simples, que temos em casa, como água e sabão, álcool, desinfetante e água sanitária são eficazes para eliminar o vírus de superfícies. No caso dos tecidos basta apenas lavá-los com água e sabão (pó ou em barra).</p>
      </div>
  },
  {
    id: 14,
    question: '14) Quem deve usar máscara? Ela protege do coronavírus?',
    answer: 
      <div>
        <p>Não existem evidências de que usar máscara de forma indiscriminada controle nenhum tipo de epidemia. Essas são as ndicações para usar a máscara:</p>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> A pessoa que tem sintomas;</p>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> O profissional da área da saúde que vai prestar atendimento para o paciente sintomático;</p>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> Indivíduos que ficam no mesmo cômodo de alguém com confirmação da doença;</p>
        <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> Use máscara caso precise sair de casa.</p>
        <br/>
        <p><strong>O jeito certo de usar as máscaras descartáveis: </strong></p>
        <p>1) Antes de colocá-la, higienize as mãos com água e sabão ou álcool em gel;</p>
        <p>2) Cubra a boca e o nariz com a máscara e se certifique de que não há espaços entre o acessório e o rosto;</p>
        <p>3) Evite tocar a máscara enquanto estiver usando-a;</p>
        <p>4) Quando a máscara estiver úmida, troque-a por uma nova. Não reutilize!</p>
        <p>5) Na hora de removê-la, faça isso pelos elásticos. Ou seja, não toque na parte da frente do acessório. Descarte-a imediatamente em uma lixeira fechada. Higienize as mãos com água e sabão ou álcool em gel.</p>
      </div>
  },
  {
    id: 15,
    question: '15) Usar luvas é aconselhável também?',
    answer: 
      <div>
        <p>Não, pois as luvas funcionam exatamente como a mão. As luvas passam uma falsa sensação de proteção, assim a pessoa pode se contaminar ao levar a luva ao rosto.</p>
      </div>
  },
  {
    id: 16,
    question: '16) Como lavar as mãos corretamente?',
    answer: 
      <div>
        <p>Siga o passo a passo a seguir para lavar as mãos corretamente:</p>
        <LavarAMao />
      </div>
  },
  {
    id: 17,
    question: '17) Existe algum remédio para combater o coronavírus?',
    answer: 
      <div>
        <p>Segundo a Organização Mundial da Saúde (OMS), não existe um remédio comprovadamente eficaz para curar a Covid-19. Alguns medicamentos podem somente aliviar alguns sintomas, porém, não possui nenhuma evidência que esses produtos podem auxiliar na cura da doença.</p>
        <p>Porém, temos pesquisas de criação de novos medicamentos para o coronavírus e pesquisas em medicamentos já existentes para uma possível ajuda na cura do vírus.</p>
      </div>
  },
  {
    id: 18,
    question: '18) Qual(is) remédio(s) a pessoa com Covid-19 deve tomar?',
    answer: 
      <div>
        <p>Não existe remédio específico. O tratamento é baseado no quadro clínico da pessoa. É indicado repouso e consumo de bastante água, além de algumas medidas adotadas para aliviar os sintomas, conforme cada caso, como, por exemplo, uso de medicamento para dor e febre (antitérmicos e analgésicos), uso de umidificador no quarto ou tomar banho quente para auxiliar no alívio da dor de garganta e tosse.</p>
      </div>
  },
  {
    id: 19,
    question: '19) Existe vacina para prevenção ao coronavírus?',
    answer: 
      <div>
        <p>Até o momento, não. No entanto, já temos pesquisas para desenvolvimento de vacina. Ainda é precoce indicar se e quando ela estará disponível.</p>
      </div>
  },
  {
    id: 20,
    question: '20) Grávidas correm mais riscos?',
    answer: 
      <div>
        <p>O Centro de Controle e Prevenção de Doenças (CDC), agência do Departamento de Saúde e Serviços Humanos dos Estados Unidos, explica que as mulheres grávidas passam por alterações imunológicas e fisiológicas que podem torná-las mais suscetíveis a infecções respiratórias virais, com a do Covid-19.</p>
        <p><strong>Com relação ao bebê</strong>, o Centro de Controle e Prevenção de Doenças (CDC), agência do Departamento de Saúde e Serviços Humanos dos Estados Unidos, afirma que não há informações suficientes sobre a possibilidade de transmissão para o bebê, e que não há caso de bebês infectados com o novo coronavírus.</p>
        <p>Já <strong>com relação a amamentação</strong>, nos casos analisados, o vírus não foi detectado no leite materno.</p>
      </div>
  },
  {
    id: 21,
    question: '21) Como proteger as pessoas idosas da Covid-19?',
    answer: 
      <div>
        <p>Esta é a população com mais risco, então devemos intensificar os cuidados. Não vá visitar se estiver com tosse, nariz escorrendo, mesmo que não tenha febre. Se moram na mesma casa, intensifique a higienização das mãos e use máscara para proteger quem você mais ama. Procure evitar que essas pessoas saiam nas ruas, cumprindo o período de quarentena.</p>
      </div>
  },
  {
    id: 22,
    question: '22) Posso visitar meus amigos?',
    answer: 
      <div>
        <p>A recomendação é evitar reuniões e aglomerações. Se for um compromisso social mais importante, mas alguém estiver com sintomas, não vá. Evite correr o risco de pegar a doença e não coloque outras pessoas em risco também. Procure ficar o máximo possível em casa e cunmprir o período de quarentena.</p>
      </div>
  },
  {
    id: 23,
    question: '23) Bichos de estimação podem transmitir o coronavírus?',
    answer: 
      <div>
        <p>Os pets não contraem a Covid-19. Cães e gatos podem contrair um coronavírus próprio de suas espécies. Ele nada tem a ver com a Covid-19 e não é transmitido para o ser humano. Por ora não há evidência de que pets estejam adoecendo pelo novo coronavírus nem que sejam capazes de propagar a doença.</p>
      </div>
  },
  {
    id: 24,
    question: '24) Quanto tempo deve durar a quarentena?',
    answer: 
      <div>
        <p>Dois decretos do governo limitam atividades desde os dias 20 e 21 de março por 30 dias.</p>
        <p>Ao contrário do isolamento, que é a separação de pessoas doentes ou contaminadas e pode durar até 14 dias, a quarentena é uma restrição à circulação em um lugar, como um bairro, um shoppping ou um hotel.</p>
      </div>
  },
  {
    id: 25,
    question: '25) É importante a prática de exercícios físicos?',
    answer: 
      <div>
        <p>As academias foram fechadas, as faixas de areia das praias foram proibas para cirlulação e todos os parques a céu aberto também estão fechados para evitar aglomerações entre pessoas. Porém, é aconselhável a prática de exercícios pois atividade física feita de maneira regular e moderada melhora o nosso sistema imunológico. Assim, procure praticar atividades físicas em casa como puder.</p>
      </div>
  },
  {
    id: 26,
    question: '26) Celular é perigoso? É importante higienizá-lo também?',
    answer: 
      <div>
        <p>Estamos sempre com o celular na mão. Se você tocou uma superfície contaminada e após tocou no celular, ele vai se tornar contaminado. Assim, é bom termos o hábito de higienizar o celular, sendo com álcool isopropílico ou qualquer outra coisa que não danifique o aparelho, pelo menos uma vez ao dia.</p>
      </div>
  }
]
class Faq extends React.Component{
  render(){
    return(
      <div className="faq">
        <main>
          <h1 className="faq-h1" style={{fontFamily: 'Roboto, sansSerif'}}>Perguntas & Respostas</h1>
          <p>Tire suas dúvidas sobre o novo coronavírus!</p>

          <Indice />

          <div className="question-collection">
            {faqList.map((el) => 
              <div className="question" id={el.id} key={el.id}>
                <h2 className='faq-h2'>{el.question}</h2>
                <div>{el.answer}</div>
              </div>)}
          </div>
        </main>
      </div>
    );
  }
}

export default Faq; 