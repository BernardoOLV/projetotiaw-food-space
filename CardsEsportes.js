if(localStorage.getItem('token') == null){
  alert('Você precisa estar logado para acessar essa página')
  window.location.href ='login.html';
}
// Array de objetos com informações dos cards
      const cards = [
        {
          id: 'Esporte 1',
          nome: 'Futebol',
          descricao: 'Faça um gol.',
          imagem: '../Img_Esportes.Js/Futebol.jpg',
          tópico1descrição: 'Esporte cujo campo de grama apresenta 105 metros de comprimento por 68 metros de largura, uma padronização da Fifa. Duas equipes compostas por 11 jogadores disputam uma partida em que o objetivo é marcar o máximo possível de gols.',
          tópico2descrição: 'Alivia o estresse, reduz a ansiedade, melhora o foco, estimula o ciclo social, ajuda no trabalho em equipe, melhora quadros de depressão e contribui para o entendimento de limites.',
          vídeo: 'https://youtu.be/HTZuteKDCa4',
           },        
           {
          id: 'Esporte 2',
          nome: 'Futebol Americano',
          descricao: 'Domine o time adversário.',
          imagem: '../Img_Esportes.Js/Futebol Americano.jpg',
          tópico1descrição: 'Um esporte de invasão, cujo objetivo é levar a bola até o campo adversário, marcando um touchdown. O jogo é dividido em 4 quartos, com a duração de 15 minutos cada. Dentro desse limite de tempo, dois times com 11 jogadores se revesam em ataque e defesa.',
          tópico2descrição: 'Mais músculos, menos gorduras, Ossos fortes, Resistência Cardiovascular e Respiração sadia.',
          vídeo: 'https://youtu.be/0Qh0TmJdMCI',
           },
        {
          id: 'Esporte 3',
          nome: 'Basquete',
          descricao: 'Enterrando na cesta.',
          imagem: '../Img_Esportes.Js/Basquete.jpg',
          tópico1descrição: 'O basquete é um esporte praticado por dois times de 5 jogadores, cujo objetivo é acertar a bola na cesta da equipe adversária, marcando ponto. A equipe com mais pontos ao final da partida será a vencedora. Um jogo de basquete é divido em 4 partes de 10 minutos, totalizando 40 minutos.',
          tópico2descrição: 'Estimula uma maior concentração de serotonina na corrente sanguínea, diminuindo os níveis de estresse, melhorando o humor e o sono. Além disso, o esporte ajuda no desenvolvimento de novas habilidades, aprimora os reflexos, auxilia no trabalho em equipe e gera novas experiências relacionais.',
          vídeo: 'https://youtu.be/DRMBX4sA-3Q',
           },
        {
            id: 'Esporte 4',
            nome: 'Vólei',
            descricao: 'Hora de sacar.',
            imagem: '../Img_Esportes.Js/Vólei.jpg',
            tópico1descrição: 'Esporte praticado entre duas equipes numa quadra retangular (aberta ou fechada). Ela é dividida por uma rede colocada verticalmente sobre a linha central.',
            tópico2descrição: 'Além de fortalecer o corpo e ajudar na perda de peso, o vôlei é benéfico para os sistemas respiratório e cardiovascular; trabalha bastante os membros superiores e inferiores, aumentando a flexibilidade e coordenação motora; estimula os neurônios e torna a pessoa mais atenta,',
            vídeo: 'https://youtu.be/qc1wkTMmXY4',
            },

          {
            id: 'Esporte 5',
            nome: 'Boliche',
            descricao: 'Derrube o máximo de pinos.',
            imagem: '../Img_Esportes.Js/Boliche.jpg',
            tópico1descrição: 'Tem como objetivo derrubar com uma bola pesada os vários pinos colocados de forma triangular no fundo da pista. ',
            tópico2descrição: 'Favorece a melhora de habilidades motoras, coordenação motora e visomotora, lateralidade e equilíbrio.',
            vídeo: 'https://youtu.be/YOAphhw1QQk',
            },

          {
            id: 'Esporte 6',
            nome: 'Natação',
            descricao: 'Um grande mergulho.',
            imagem: '../Img_Esportes.Js/Natação.jpg',
            tópico1descrição: 'A pessoa se desloca de um lado para o outro na água, através da combinação de movimentos das pernas e braços.',
            tópico2descrição: 'Melhora a coordenação motora, ajuda a definir músculos de diversas partes do corpo, principalmente braços, costas e peitoral.',
            vídeo: 'https://youtu.be/IAKD5RIZBds',
            },

          {
            id: 'Esporte 7',
            nome: 'Judô',
            descricao: 'Prepare seu chute.',
            imagem: '../Img_Esportes.Js/Judô.jpg',
            tópico1descrição: 'Criada por Jigoro Kano em 1882, o judô é uma adaptação do jiu-jitsu, que tem por objetivo desenvolver técnicas de defesa pessoal, fortalecer o corpo, o físico e a mente de forma integrada. ',
            tópico2descrição: 'O judoca melhora seu condicionamento físico e ganha força, pois os golpes trabalham todos os músculos, o judô estimula o respeito e contribui essencialmente para potencializar o raciocínio lógico, paciência e autocontrole.',
            vídeo: 'https://youtu.be/y_OmrHdX0Rw',
            },

          {
            id: 'Esporte 8',
            nome: 'Muay Thai',
            descricao: 'Proteja-se.',
            imagem: '../Img_Esportes.Js/Muay Thai.jpg',
            tópico1descrição: 'Arte marcial milenar, originária da Tailândia. O esporte é conhecido como arte das oito armas, pois combina golpes utilizando os punhos, braços, cotovelos, joelhos e pés.',
            tópico2descrição: 'Tonificam os músculos e diminuem o percentual de gordura de forma rápida e eficiente.',
            vídeo: 'https://youtu.be/jcNOLN4cClE',
            },

          {
            id: 'Esporte 9',
            nome: 'Caratê',
            descricao: 'Concentre seu foco.',
            imagem: '../Img_Esportes.Js/Karatê.jpg',
            tópico1descrição: 'Consiste em uma arte marcial japonesa e um método de ataque e defesa pessoal que inclui diversas técnicas executadas com as mãos desarmadas.',
            tópico2descrição: 'O Karate proporciona não apenas o exercício físico de forma harmoniosa, mas desenvolve princípios de respeito ao adversário, domínio próprio, determinação e humildade. O Karate vai além da luta, tem uma filosofia e envolve virtudes necessárias para uma atuação social positiva : União, Amizade, Respeito e Disciplina.',
            vídeo: 'https://youtu.be/FZsUmdv979s',
            },

          {
            id: 'Esporte 10',
            nome: 'Jiu Jitsu',
            descricao: 'Domine seu oponente.',
            imagem: '../Img_Esportes.Js/Jiu Jitsu.jpg',
            tópico1descrição: 'Arte marcial que tem por objetivo conquistar posições de controle sob o adversário até o xeque-mate, a finalização, seja por torção ou estrangulamento.',
            tópico2descrição: 'Desenvolve a força, a resistência e a flexibilidade, foca na luta e na movimentação no chão, ajuda a perder peso e ter uma ótima condição física, ensina também técnicas de defesa pessoal e desenvolve a autoconfiança.',
            vídeo: 'https://youtu.be/Dk5Zc5ipeFk',
            },

          {
            id: 'Esporte 11',
            nome: 'Taekwondo',
            descricao: 'Passando para a próxima faixa.',
            imagem: '../Img_Esportes.Js/Taekwondo.jpg',
            tópico1descrição: 'Arte marcial de origem coreana que utiliza movimentos de ataque e defesa com os pés e as mãos. Entre as capacidades físicas trabalhadas estão a força, o equilíbrio, a potência e a flexibilidade. A prática pode ser vivenciada como esporte, com regras institucionalizadas, ou como arte marcial, com a aplicação de princípios filosóficos de acordo com as tradições coreanas.',
            tópico2descrição: 'Trabalha a coordenação física e motora, flexibilidade, equilíbrio e concentração, promove a boa forma física, em detrimento do excesso de peso, e desenvolve a capacidade atlética; Desenvolve a capacidade de defesa pessoal; Desenvolve o espírito de grupo, através do treino com os colegas, e promove a disciplina.',
            vídeo: 'https://youtu.be/RMlyeJ5cf9Q',
            },

          {
            id: 'Esporte 12',
            nome: 'Esgrima',
            descricao: 'Em posição.',
            imagem: '../Img_Esportes.Js/Esgrima.jpg',
            tópico1descrição: 'Arte de manusear o florete, o sabre e a espada, armas “brancas” usadas para ataque, defesa e contra-ataque. É o único esporte de combate em que não é permitido contato corporal.',
            tópico2descrição: 'Aprimora múltiplas habilidades, tais como: agilidade, sensibilidade rítmica, audição, tato, concentração, criatividade, inteligência e controle emocional.',
            vídeo: 'https://youtu.be/3lWgIK-YGdk',
            },

          {
            id: 'Esporte 13',
            nome: 'Corrida Individual',
            descricao: 'Equilíbrio é Essencial.',
            imagem: '../Img_Esportes.Js/Corrida Individual.jpg',
            tópico1descrição: 'Aquele onde o praticante depende somente dele para atingir um objetivo, no caso, atingir um distância em um determinado tempo.',
            tópico2descrição: 'Bom para emagrecer, tonificar as coxas, manter a forma e trabalhar a resistência muscular.',
            vídeo: 'https://youtu.be/nPIM3KkvxSY?list=PLxnE_2BdU4eDTj81IWtVKmxUHYvHRroJt',
            },

          {
            id: 'Esporte 14',
            nome: 'Xadrez',
            descricao: 'Xeque mate.',
            imagem: '../Img_Esportes.Js/Xadrez.jpg',
            tópico1descrição: 'Um jogo de tabuleiro, com caráter competitivo e recreativo, cujo objetivo principal é dar o xeque-mate no adversário e obter a vitória.',
            tópico2descrição: 'Estimula o funcionamento e extensão da memória e do trabalho neuronal, como a inteligência, a atenção, a memória espaço-visual e o raciocínio.',
            vídeo: 'https://youtu.be/6mBrbZSheuo',
            },

          {
            id: 'Esporte 15',
            nome: 'Esports',
            descricao: 'Esteja online.',
            imagem: '../Img_Esportes.Js/Esports.png',
            tópico1descrição: 'São as competições de jogos digitais. Os jogadores são considerados atletas profissionais de esportes, sendo assistidos por uma audiência que pode estar presente ou on-line em plataformas de streaming. ',
            tópico2descrição: 'Pode ajudar muitas crianças e adolescentes a estimular suas paixões, aumentar seu rendimento acadêmico, sociabilidade e estimular intelectualmente muitos jovens.',
            vídeo: 'https://youtu.be/nM3-6LFdd7M',
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
