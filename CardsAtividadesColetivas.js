if(localStorage.getItem('token') == null){
  alert('Você precisa estar logado para acessar essa página')
  window.location.href ='login.html';
}
// Array de objetos com informações dos cards
      const cards = [
        {
          id: 'Atividade Coletiva 1',
          nome: 'Futebol',
          descricao: 'Faça um gol.',
          imagem: '../Img_AtividadesColetivas.Js/Futebol.jpg',
          tópico1descrição: 'Esporte cujo campo de grama apresenta 105 metros de comprimento por 68 metros de largura, uma padronização da Fifa. Duas equipes compostas por 11 jogadores disputam uma partida em que o objetivo é marcar o máximo possível de gols.',
          tópico2descrição: 'Alivia o estresse, reduz a ansiedade, melhora o foco, estimula o ciclo social, ajuda no trabalho em equipe, melhora quadros de depressão e contribui para o entendimento de limites.',
          vídeo: 'https://youtu.be/HTZuteKDCa4',
        },
        {
          id: 'Atividade Coletiva 2',
          nome: 'Futebol de Sabão',
          descricao: 'Cuidado onde pisa.',
          imagem: '../Img_AtividadesColetivas.Js/Futebol de Sabão.jpg',
          tópico1descrição: 'O jogo consiste no uso de um equipamento inflável, semelhante ao do Pula-pula, porém em formato de um diminuto campo de futebol (ou showbol), onde os participantes, divididos em dois times, devem chutar uma bola na direção do gol. Vence a equipe que conseguir mais gols.',
          tópico2descrição: 'Estimula a coordenação motora e visual. Trabalha os movimentos corporais, ajuda na percepção e atenção.',
          vídeo: 'https://youtu.be/eCuyRqZcKlE',
        },
        {
          id: 'Atividade Coletiva 3',
          nome: 'Basquete',
          descricao: 'Enterrando na cesta.',
          imagem: '../Img_AtividadesColetivas.Js/Basquete.jpg',
          tópico1descrição: 'O basquete é um esporte praticado por dois times de 5 jogadores, cujo objetivo é acertar a bola na cesta da equipe adversária, marcando ponto. A equipe com mais pontos ao final da partida será a vencedora. Um jogo de basquete é divido em 4 partes de 10 minutos, totalizando 40 minutos.',
          tópico2descrição: 'Estimula uma maior concentração de serotonina na corrente sanguínea, diminuindo os níveis de estresse, melhorando o humor e o sono. Além disso, o esporte ajuda no desenvolvimento de novas habilidades, aprimora os reflexos, auxilia no trabalho em equipe e gera novas experiências relacionais.',
          vídeo: 'https://youtu.be/DRMBX4sA-3Q',
        },

        {
            id: 'Atividade Coletiva 4',
            nome: 'Vólei',
            descricao: 'Hora de sacar.',
            imagem: '../Img_AtividadesColetivas.Js/Vólei.jpg',
            tópico1descrição: 'Esporte praticado entre duas equipes numa quadra retangular (aberta ou fechada). Ela é dividida por uma rede colocada verticalmente sobre a linha central.',
            tópico2descrição: 'Além de fortalecer o corpo e ajudar na perda de peso, o vôlei é benéfico para os sistemas respiratório e cardiovascular; trabalha bastante os membros superiores e inferiores, aumentando a flexibilidade e coordenação motora; estimula os neurônios e torna a pessoa mais atenta',
            vídeo: 'https://youtu.be/qc1wkTMmXY4',
          },

          {
            id: 'Atividade Coletiva 5',
            nome: 'Corrida',
            descricao: 'Saia na frente.',
            imagem: '../Img_AtividadesColetivas.Js/Corrida.jpg',
            tópico1descrição: 'Prática corporal que envolve os músculos dos membros inferiores para promover o deslocamento do corpo.',
            tópico2descrição: 'Emagrecer, tonificar as coxas, manter a forma e trabalhar a resistência muscular.',
            vídeo: 'https://youtu.be/nPIM3KkvxSY?list=PLxnE_2BdU4eDTj81IWtVKmxUHYvHRroJt',
          },

          {
            id: 'Atividade Coletiva 6',
            nome: 'Queimada',
            descricao: 'Queime e desvie.',
            imagem: '../Img_AtividadesColetivas.Js/Queimada.jpg',
            tópico1descrição: 'Praticado por dois times, cujo objetivo é eliminar o adversário atingindo-os ("queimando-os") com a bola.',
            tópico2descrição: 'Promove a cooperação entre os participantes, desenvolve a rapidez de pensamento, agilidade corporal e mira. ',
            vídeo: 'https://youtu.be/7sE8z5igdfI',
          },

          {
            id: 'Atividade Coletiva 7',
            nome: 'Tênis de Mesa',
            descricao: 'Aprimore seus reflexos.',
            imagem: '../Img_AtividadesColetivas.Js/Tênis.jpg',
            tópico1descrição: 'Jogo de múltiplas contagens parciais, como pontos, games, sets e partidas. Cada lance pode ser rebatido ainda no ar ou após um quique da bola na mesa. O primeiro movimento do jogo é o saque, que deve ser feito do fundo da quadra e enviando a bola para o outro lado da rede, na diagonal.',
            tópico2descrição: 'Desenvolve coordenação, flexibilidade e equilíbrio, Queima calorias, Fortalece a musculatura, Diminui o risco de doença cardíaca, Aumenta a capacidade cerebral e Melhora a saúde óssea.',
            vídeo: 'https://youtu.be/GaqMO0-xyFw',
          },

          {
            id: 'Atividade Coletiva 8',
            nome: 'Queda de Braço',
            descricao: 'Aguente Firme.',
            imagem: '../Img_AtividadesColetivas.Js/Queda de Braço.jpg',
            tópico1descrição: ' Jogo em que dois adversários, colocados frente a frente, mantendo os cotovelos assentes numa superfície fixa e os braços flectidos e agarrando na mão um do outro, fazem força para que um deles perca o desafio ao bater com as costas da mão na superfície de apoio.',
            tópico2descrição: 'Desenvolvimento de força e resiliência muscular, além de ser uma brincadeira que pode ser feita a qualquer momento.',
            vídeo: 'https://youtu.be/hXsGlf2Wnyk',
          },

          {
            id: 'Atividade Coletiva 9',
            nome: 'Pique-Esconde',
            descricao: 'Ache seus amigos.',
            imagem: '../Img_AtividadesColetivas.Js/Pique esconde.jpg',
            tópico1descrição: 'Uma brincadeira infantil, na qual enquanto uma pessoa (o "pegue") fica com os olhos fechados contando atécerto número combinado com os participantes, os demais participantes se escondem, quando o participante que está procurando, acha quem está escondido ele corre ebate na parede ou no lugar em que ele estava contando: um, dois três pego.',
            tópico2descrição: 'A sociabilidade está entre as vantagens da criança brincar de pique-esconde, além do estímulo ao exercício físico.',
            vídeo: 'https://youtu.be/ehWCerc72WQ',
          },

          {
            id: 'Atividade Coletiva 10',
            nome: 'Amarelinha',
            descricao: 'Faltam muitas casas.',
            imagem: '../Img_AtividadesColetivas.Js/Amarelhinha.jpg',
            tópico1descrição: 'Uma brincadeira de regras simples que desenvolve habilidades motoras de saltar com um e dois pés, arremessar e equilibrar.',
            tópico2descrição: 'Desenvolve noções espaciais e auxilia diretamente na organização do esquema corporal, da motricidade e força das crianças.',
            vídeo: 'https://youtu.be/NLi3TLQECJQ',
          },

          {
            id: 'Atividade Coletiva 11',
            nome: 'Coelho sai da toca',
            descricao: 'Seja rápido.',
            imagem: '../Img_AtividadesColetivas.Js/Coelho sai da toca.jpg',
            tópico1descrição: 'Dividir as crianças em grupos de 3: duas ficam de mãos dadas, formando a toca e a terceira fica no meio representando o coelho. As “tocas” devem estar espalhadas pelo local da brincadeira. Devem ficar duas ou mais crianças sem toca, no centro da área.',
            tópico2descrição: 'Ajuda a desenvolver a coordenação motora, a cultivar a paciência e proporcionando a interação entre as crianças.',
            vídeo: 'https://youtu.be/-N8Bkhh50tU',
          },

          {
            id: 'Atividade Coletiva 12',
            nome: 'Peteca',
            descricao: 'Timing.',
            imagem: '../Img_AtividadesColetivas.Js/Peteca.jpg',
            tópico1descrição: 'O jogo de peteca guarda certas semelhanças com o voleibol e o badminton, pelo fato de jogar-se, como estes, em um campo dividido por uma rede.',
            tópico2descrição: 'Desenvolvem a coordenação fina e aprimorarem habilidades motoras, lateralidade e usarem os variados movimentos corporais.',
            vídeo: 'https://youtu.be/zS8L_erznXQ',
          },

          {
            id: 'Atividade Coletiva 13',
            nome: 'Trilha',
            descricao: 'Equilíbrio é Essencial.',
            imagem: '../Img_AtividadesColetivas.Js/Trilha.jpg',
            tópico1descrição: 'Caminhos existentes ou estabelecidos, com diferentes formas, comprimentos e larguras, que possuam o objetivo aproximar o visitante ao ambiente natural, ou conduzí-lo a um atrativo específico, possibilitando seu entretenimento ou educação através de sinalizações ou de recursos interpretativos.',
            tópico2descrição: 'Excelente para aprender, e por em prática, orientação e estratégia; Dá para agregar outros esportes, como Rafting ou Rapel em cachoeiras, por exemplo; Possibilita fazer novos amigos e aprender novas culturas; Oportunidade de estar em contato com belas e deslumbrantes paisagens que nunca foram manipuladas pelo homem.',
            vídeo: 'https://youtu.be/QKexJNIdWZ0',
          },

          {
            id: 'Atividade Coletiva 14',
            nome: 'PaintBall',
            descricao: 'Proteja seus olhos.',
            imagem: '../Img_AtividadesColetivas.Js/PaintBall.jpg',
            tópico1descrição: 'Duas equipes competem entre si, usando marcadores que disparam projéteis de tinta para atingir o adversário.',
            tópico2descrição: 'Libertação de stress e aumento progressivo do humor, desenvolvimento da capacidade de trabalho em equipa, boa comunicação e criação de estratégias, além de que se gasta uma boa quantidade de calorias.',
            vídeo: 'https://youtu.be/308E3UmY1to',
          },

          {
            id: 'Atividade Coletiva 15',
            nome: 'Jogos de Dança',
            descricao: 'Basta dançar.',
            imagem: '../Img_AtividadesColetivas.Js/Dance Games.jpg',
            tópico1descrição: 'Atividades lúdicas que promovem, de forma divertida, a interação dos participantes com os fundamentos da dança: corpo, espaço e movimento. Sem o rigor de uma forma específica.',
            tópico2descrição: 'Intensificam as consciências sensorial e corporal e, assim, aumentam a capacidade de concentração e a memória.',
            vídeo: 'https://youtu.be/GOPM_onSuMM',
          },
          
        // Adicione mais objetos aqui para preencher os outros cards
      ];

      // Função para preencher os cards
function preencherCards() {
  var str = "";
  cards.forEach((card, index) => {
    str += `<div class="col-md-3 m-5 rounded-circle">
    <div class="card" id="card-${index}" data-ambiente="tanto-faz" data-necessidade="não" data-duracao="rodadas" data-exercicio="exercicio1">            
    <img src="${card.imagem}" alt="Imagem do Card 1">
    <h3>${card.nome}</h3>
    <p>${card.descricao}</p>
    <div class="accordion" id="accordionExample-${index}">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne-${index}" aria-expanded="false" aria-controls="collapseOne-${index}">
            Descrição
          </button>
        </h2>
        <div id="collapseOne-${index}" class="accordion-collapse collapse" data-bs-parent="#accordionExample-${index}">
          <div class="accordion-body">
            ${card.tópico1descrição}
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo-${index}" aria-expanded="false" aria-controls="collapseTwo-${index}">
            Benefícios
          </button>
        </h2>
        <div id="collapseTwo-${index}" class="accordion-collapse collapse" data-bs-parent="#accordionExample-${index}">
          <div class="accordion-body">
            ${card.tópico2descrição}
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree-${index}" aria-expanded="false" aria-controls="collapseThree-${index}">
            Vídeo
          </button>
        </h2>
        <div id="collapseThree-${index}" class="accordion-collapse collapse" data-bs-parent="#accordionExample-${index}">
          <div class="accordion-body">
          <p><a href="${card.vídeo}" class="link-underline-primary">Explicação do Exercício</a></p>          
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  </div>`;

    // Adiciona o evento de clique aos botões do accordion
    const accordionButtons = document.querySelectorAll(`#card-${index} .accordion-button`);
    accordionButtons.forEach((button) => {
      button.addEventListener('click', function () {
        // Encontra o conteúdo correspondente ao botão clicado
        const target = this.getAttribute('data-bs-target');
        const collapse = document.querySelector(target);

        // Abre ou fecha o conteúdo
        collapse.classList.toggle('show');

        // Altera o atributo aria-expanded
        const expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
      });
    });
  });

  document.querySelector("#exibirCards").innerHTML = str;
}

// Chama a função para preencher os cards quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', preencherCards);
