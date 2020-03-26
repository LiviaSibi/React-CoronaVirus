import React from 'react';
import Footer from './components/Footer.js';
import Indice from './components/Indice.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

class Faq extends React.Component{
    render(){
        return(
            <div className="faq">
                <main>
                    <h1 className="faq-h1">Perguntas & Respostas</h1>
                    <div>
                        <p>Tire suas dúvidas sobre o novo coronavírus!</p>

                        <Indice />

                        <div className="duvida">
                            <div className="question" id="question-1">
                                <h2 className='faq-h2'>O que é o coronavírus?</h2>
                                <p>Coronavírus é o nome de uma grande família de vírus que tem uma estrutura em formato de coroa, conhecida desde 
                                    1960. Eles causam infecções respiratórias. </p>
                                <p>A doença causada pelo novo coronavírus recebeu o nome de Covid-19. Ela foi descoberta no final de dezembro de 
                                    2019, na China. </p>
                            </div>

                            <div className="question" id="question-2">
                                <h2 className='faq-h2'>Como é a transmissão?</h2>
                                <p>Pode ocorrer de três formas: </p>
                                <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> Por vias respiratórias, pelo ar e por gotículas provenientes de espirros e da fala de indivíduos infectados;</p>
                                <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> Por contato físico, quando essas gotículas com o vírus alcançam mucosas do olho, nariz e boca por meio de beijos e abraços;</p>
                                <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> Por meio do contato de superfícies contaminadas, quando essas gotículas com o vírus ficam depositadas em locais como um corrimão ou uma maçaneta, e depois entram em contato com mucosas do olho, nariz e boca.</p>
                            </div>

                            <div className="question" id="question-3">
                                <h2 className='faq-h2'>Quais são os sintomas que a doença causa?</h2>
                                <p>Tosse seca, febre e cansaço são os principais sintomas, mas alguns pacientes podem sentir dores no corpo, congestionamento nasal, inflamação na garganta ou diarreia.</p>
                                <p>Nos casos mais graves, que geralmente ocorrem em pessoas que já apresentam outras doenças associadas, há síndrome respiratória aguda e insuficiência renal.</p>
                            </div>

                            <div className="question" id="question-4">
                                <h2 className='faq-h2'>Como previnir o coronavirus?</h2>
                                <p>Higienizar as mãos e superfícies, como móveis e corrimão, são as principais formas de se prevenir contra o novo coronavírus. Mesmo com as mãos limpas, evitar tocar mucosas de olhos, nariz e boca. Além disso, é preciso limpar regularmente o ambiente e mantê-lo ventilado.</p>
                                <p>O Ministério da Saúde alerta também para que não seja feito o compartilhamento de itens pessoais, como talheres e toalhas. Também é recomendável manter a uma distância mínima de um metro de pessoas que estejam espirrando ou tossindo.</p>
                            </div>

                            <div className="question" id="question-5">
                                <h2 className='faq-h2'>O que fazer em caso de sintomas?</h2>
                                <p>Assim que surgirem os primeiros sintomas, o paciente deve procurar o serviço de saúde mais próximo da sua residência. O profissional vai avaliar se os sintomas podem indicar alguma probabilidade de infecção por coronavírus, coletar material para diagnóstico e iniciar o tratamento.</p>
                                <p>A infecção apresenta manifestações clínicas parecidas com as de outros vírus e não existe tratamento específico para infecções por coronavírus até o momento. Dessa forma, no caso do novo coronavírus é indicado:</p>
                                <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> Repouso;</p>
                                <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> Hidratação (ingestão de bastante água e líquidos);</p>
                                <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> Medidas adotadas para aliviar os sintomas, conforme cada caso, como: uso de medicamento para dor e febre (antitérmicos e analgésicos); uso de umidificador no quarto; tomar banho quente para auxiliar no alívio da dor de garganta e tosse.</p>
                                <p>Pacientes com sintomas mais intensos podem ser hospitalizados. A definição compete ao médico responsável pelo caso.</p>
                            </div>

                            <div className="question" id="question-6">
                                <h2 className='faq-h2'>Pessoas com o vírus, mas sem os sintomas, podem transmitir a doença?</h2>
                                <p>De acordo com a Organização Mundial de Saúde (OMS), a transmissão de uma pessoa assintomática é rara. O modo de contágio mais comum é por meio de pacientes que apresentam os sintomas de Covid-19.</p>
                                <p>Segundo o Ministério da Saúde, casos assintomáticos e durante o período de incubação não são contagiosos. No entanto, o próprio ministério informa que há dados que sugerem que a transmissão pode ocorrer mesmo sem o aparecimento de sinais e sintomas.</p>
                                <p>O ministério destaca, ainda, que é possível haver transmissão por quem apresentou sintomas mesmo após eles já terem acabado. O período de transmissibilidade, nesse último caso, ainda é desconhecido.</p>
                            </div>

                            <div className="question" id="question-7">
                                <h2 className='faq-h2'>É possível ser infectado com o coronavírus mais de uma vez?</h2>
                                <p>Os cientistas ainda não têm essa resposta de forma concreta. Porém há casos de pessoas que foram infectadas pelo segunda vez em outros países.</p>
                            </div>

                            <div className="question" id="question-8">
                                <h2 className='faq-h2'>O que as pessoas que tiveram contato com pacientes suspeitos devem fazer?</h2>
                                <p>Valem as dicas básicas de cuidados de prevenção e prestar atenção em eventuais sinais ou sintomas. Caso aconteça, é fundamental procurar um serviço de saúde.</p>
                            </div>

                            <div className="question" id="question-9">
                                <h2 className='faq-h2'>Por que o vírus muda?</h2>
                                <p>Os vírus, de uma forma geral, toda vez que eles se replicam, eles podem sofrer mutações. É uma característica dos vírus de uma forma geral. Até o momento, não houve detecção de nenhuma mutação que mudasse a característica da apresentação da doença. Ou seja, nenhuma mutação que tornasse esse vírus mais agressivo. Temos o mesmo comportamento da doença desde a sua descoberta na China, até os casos atuais, inclusive o vírus brasileiro que foi sequenciado com as mesmas características.</p>
                            </div>

                            <div className="question" id="question-10">
                                <h2 className='faq-h2'>Qual é o tempo de incubação do Covid-19?</h2>
                                <p>O "período de incubação" significa o tempo entre a captura do vírus pelo ser humano e o início dos sintomas da doença.</p>
                                <p>De acordo com a Organização Mundial da Saúde (OMS), a maioria das estimativas do período de incubação do Covid-19 varia de 1 a 14 dias, geralmente em torno de 5 dias.</p>
                            </div>

                            <div className="question" id="question-11">
                                <h2 className='faq-h2'>Qual é a definição de caso suspeito?</h2>
                                <p>Podem ser considerados suspeitos os casos que se enquadrem em uma dessas duas situações:</p>
                                <p>1) viajante que apresenta febre e pelo menos um sintoma respiratório, com histórico de viagem para país com transmissão sustentada ou área com transmissão local nos últimos 14 dias;</p>
                                <p>2) contato próximo com caso suspeito ou confirmado para COVID-19, nos últimos 14 dias, e que apresente febre ou algum sintoma respiratório, como tosse, dificuldade para respirar, produção de escarro, congestão nasal, coriza, por exemplo.</p>
                            </div>

                            <div className="question" id="question-12">
                                <h2 className='faq-h2'>O coronavírus pode matar?</h2>
                                <p>O óbito pode ocorrer em virtude de complicações da infecção, como por exemplo, insuficiências respiratórias. Até 12 de março, de acordo com dados da Organização Mundial da Saúde (OMS), o novo coronavírus apresentava uma taxa média de letalidade de 3,6%.</p>
                                <p>A taxa de letalidade entre idosos acima de 80 anos pode passar de 15%, e entre os jovens é menor que 0,5%.</p>
                            </div>

                            <div className="question" id="question-13">
                                <h2 className='faq-h2'>Quanto tempo o novo coronavirus sobrevive no ambiente?</h2>
                                <p>Os vírus não costumam sobreviver muito tempo nos ambientes, pelo menos não de modo infectante. Ou seja, não de uma maneira capaz de infectar o ser humano. Produtos de limpeza simples, que temos em casa, como água e sabão, álcool, desinfetante e água 
                                    sanitária são eficazes para eliminar o vírus de superfícies.</p>
                            </div>

                            <div className="question" id="question-14">
                                <h2 className='faq-h2'>Quanto tempo o novo coronavírus sobrevive em uma superfície ou no ar?</h2>
                                <p>Um estudo publicado na revista científica "New England Journal of Medicine" em 17 de março afirma que o coronavírus consegue sobreviver até 3 dias em algumas superfícies, como plástico ou aço. Já em papelão, o vírus pode ficar por até 24 horas, enquanto na superfície de cobre dura 4 
                                    horas e em poeiras, 1,1 hora.</p>
                            </div>

                            <div className="question" id="question-15">
                                <h2 className='faq-h2'>Quem deve usar máscara? Ela protege do coronavírus?</h2>
                                <p>Não existem evidências de que usar máscara de forma indiscriminada controle nenhum tipo de epidemia. Mas existem três situações que possuem indicação para usar a máscara:</p>
                                <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> A pessoa que tem sintomas;</p>
                                <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> O profissional da área da saúde que vai prestar atendimento para o paciente sintomático;</p>
                                <p><FontAwesomeIcon icon={faCircle} size="xs" style={{fontSize: '0.4rem', marginBottom: '0.2rem'}}/> O contactante domiciliar da pessoa doente.</p>
                            </div>

                            <div className="question" id="question-16">
                                <h2 className='faq-h2'>Usar luvas seria uma boa ideia?</h2>
                                <p>Não, pois as luvas funcionam exatamente como a mão. Ela vai se contaminar e ao levar a luva ao rosto você pode se contaminat também.</p>
                            </div>

                            <div className="question" id="question-17">
                                <h2 className='faq-h2'>Como lavar as mãos corretamente?</h2>
                                <p>As mãos devem ser lavadas com água e sabão, ou higienizadas com álcool. A recomendação é que a higiene seja completa, inclua a parte inferior da ponta das unhas e alcance também a região do pulso.</p>
                            </div>

                            <div className="question" id="question-18">
                                <h2 className='faq-h2'>Existe algum remédio para combater o coronavírus?</h2>
                                <p>Segundo a Organização Mundial da Saúde (OMS), não existe um remédio comprovadamente eficaz para curar a Covid-19. Alguns medicamentos podem somente aliviar alguns sintomas, porém, não possui nenhuma evidência que esses produtos podem auxiliar na cura da doença.</p>
                            </div>

                            <div className="question" id="question-19">
                                <h2 className='faq-h2'>Qual(is) remédio(s) a pessoa com COVID-19 deve tomar?</h2>
                                <p>Não existe remédio específico. O tratamento é baseado no quadro clínico da pessoa. É indicado repouso e consumo de bastante água, além de algumas medidas adotadas para aliviar os sintomas, conforme cada caso, como, por exemplo, uso de medicamento para dor e febre (antitérmicos e 
                                    analgésicos), uso de umidificador no quarto ou tomar banho quente para auxiliar no alívio da dor de garganta e tosse.</p>
                            </div>

                            <div className="question" id="question-20">
                                <h2 className='faq-h2'>Existe vacina para prevenção ao coronavírus?</h2>
                                <p>Até o momento, não. No entanto, cientistas ao redor do mundo e no Estado de São Paulo, como as equipes do Instituto Butantan, já iniciaram pesquisas para desenvolvimento de vacina. Ainda é precoce indicar se e quando ela estará disponível.</p>
                            </div>

                            <div className="question" id="question-21">
                                <h2 className='faq-h2'>Grávidas correm mais riscos?</h2>
                                <p>O Centro de Controle e Prevenção de Doenças (CDC), agência do Departamento de Saúde e Serviços Humanos dos Estados Unidos, explica que as mulheres grávidas passam por alterações imunológicas e fisiológicas que podem torná-las mais suscetíveis a infecções respiratórias virais, 
                                    com a do Covid-19.</p>
                                <p><strong>Com relação ao bebê</strong>, o Centro de Controle e Prevenção de Doenças (CDC), agência do Departamento de Saúde e Serviços Humanos dos Estados Unidos, afirma que não há informações suficientes sobre a possibilidade de transmissão para o bebê, e que não há caso de bebês infectados com o novo 
                                    coronavírus.</p>
                                <p>Já <strong>com relação a amamentação</strong>, nos casos analisados, o vírus não foi detectado no leite materno.</p>
                            </div>

                            <div className="question" id="question-22">
                                <h2 className='faq-h2'>Como proteger as pessoas idosas da Covid-19?</h2>
                                <p>Esta é a população com mais risco, então devemos intensificar os cuidados. Não vá visitar se estiver com tosse, nariz escorrendo, mesmo que não tenha febre. Se moram na mesma casa, intensifique a higienização das mãos e use máscara para proteger quem você mais ama.</p>
                            </div>

                            <div className="question" id="question-23">
                                <h2 className='faq-h2'>Posso visitar meus amigos?</h2>
                                <p>A recomendação é evitar reuniões e aglomerações. Se for um compromisso social mais importante, mas alguém estiver com sintomas, não vá. Evite correr o risco de pegar a doença e não coloque outras pessoas em risco também.</p>
                            </div>

                            <div className="question" id="question-24">
                                <h2 className='faq-h2'>Bichos de estimação podem transmitir o coronavírus?</h2>
                                <p>A Organização Mundial da Saúde (OMS) está monitorando pesquisas sobre a relação entre animais de estimação e a Covid-19, doença causada pelo novo coronavírus. A organização informa não haver evidência significativa de que pets possam ficar doentes ou transmitir o vírus.</p>
                            </div>

                            <div className="question" id="question-25">
                                <h2 className='faq-h2'>Quanto tempo deve durar a quarentena?</h2>
                                <p>O Ministério da Saúde publicou uma portaria em 12 e março que define como será feita quarentena. A medida, que precisa ser determinada por ato administrativo formal de uma autoridade pública, pode ser adotada por até 40 dias e pode se estender pelo tempo necessário para reduzir a 
                                    transmissão comunitária e garantir a manutenção dos serviços de saúde.</p>
                                <p>Ao contrário do isolamento, que é a separação de pessoas doentes ou contaminadas e pode durar até 14 dias, a quarentena é uma restrição à circulação em um lugar, como um bairro, um hospital ou um hotel.</p>
                            </div>

                            <div className="question" id="question-26">
                                <h2 className='faq-h2'>Como manter a rotina de esportes?</h2>
                                <p>A recomendação é fazer atividades físicas ao ar livre mantendo distância de pelo menos 1 metro entre as pessoas. Esportes de contato devem ser evitados.</p>
                            </div>

                            <div className="question" id="question-27">
                                <h2 className='faq-h2'>Celular é perigoso? É importante higienizá-lo também?</h2>
                                <p>Estamos sempre com o celular na mão. Se você tocou uma superfície contaminada e após tocou no celular, ele vai se tornar contaminado. Então, é bom termos o hábito de higienizar o celular, sendo com álcool isopropílico ou qualquer outra coisa que não danifique o aparelho, pelo 
                                    menos uma vez ao dia.</p>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Faq; 