// Array de objetos com informações dos cards
const cards = [
  {
    id: 'Exercício Físico 1',
    nome: 'Flexão',
    descricao: 'Só mais uma.',
    imagem: '../Img_ExercicioFisico.Js/Flexão.jpg',
    tópico1descrição: 'Extensões de braços no solo ou flexão é um exercício físico realizado em posição de prancha, com os braços estendidos e as palmas das mãos afastadas a largura dos ombros e alinhadas com os mesmos.',
    tópico2descrição: 'Melhora a força e a resistência dos membros superiores; Melhora da capacidade de estabilização da coluna; Promove ativação dos músculos abdominais, lombares e que envolvem o quadril.',
    vídeo: 'https://youtu.be/o7yeMRE37Ko',
  },
  
  {
    id: 'Exercício Físico 2',
    nome: 'Caminhada',
    descricao: 'Continue andando.',
    imagem: '../Img_ExercicioFisico.Js/Caminhada.jpg',
    tópico1descrição: 'Ato de andar sem interrupções, de modo que a intensidade desse andar deva ser de intensidade moderada a forte.',
    tópico2descrição: 'Deixa o pulmão mais eficiente, Combate a osteoporose, Afasta a depressão, Aumenta a sensação de bem-estar.',
    vídeo: 'https://www.youtube.com/watch?v=laINp3ySgFQ',
  },
  {
    id: 'Exercício Físico 3',
    nome: 'Pular Corda',
    descricao: 'Fique atento.',
    imagem: '../Img_ExercicioFisico.Js/Pular Corda.jpg',
    tópico1descrição: 'Pular corda ou saltar corda é uma brincadeira tradicional que envolve grande atividade física e coordenação motora. Tais características fizeram da recreação um desporto.',
    tópico2descrição: 'Fortalece o sistema respiratório e cardíaco, estimula a circulação sanguínea, elimina toxinas, trabalha os braços, firma o glúteo e o abdômen, tonifica os músculos das pernas.',
    vídeo: 'https://www.youtube.com/watch?v=q-EiK-pznsU',
  },

  {
      id: 'Exercício Físico 4',
      nome: 'Alongamento',
      descricao: 'Esticando os Membros.',
      imagem: '../Img_ExercicioFisico.Js/Alongamento.jpg',
      tópico1descrição: 'O alongamento é uma forma de exercício físico em que um músculo ou tendão específico é deliberadamente flexionado ou alongado para melhorar a elasticidade sentida do músculo e obter um tônus muscular confortável.',
      tópico2descrição: 'Aumenta a consciência corporal, melhorando também a habilidade para aprender e executar movimentos finos; Melhora a postura; Previne lesões esportivas e as dores musculares após o exercício físico.',
      vídeo: 'https://www.youtube.com/watch?v=OpVLju5eVxw',
      
    },

    {
      id: 'Exercício Físico 5',
      nome: 'Abdominal',
      descricao: 'Posso suportar.',
      imagem: '../Img_ExercicioFisico.Js/Abdominal.jpg',
      tópico1descrição: 'Para desenvolver e fortalecer a musculatura do abdômen, trabalhando os principais pontos do tórax, principalmente do músculo reto.',
      tópico2descrição: 'O abdominal pode ajudar na diminuição do desgaste da coluna, reduzindo significativamente as dores nas costas.',
      vídeo: 'https://youtu.be/_8LA9bVvGGw',
    },

    {
      id: 'Exercício Físico 6',
      nome: 'Supino',
      descricao: 'Use sua força.',
      imagem: '../Img_ExercicioFisico.Js/Supino.jpg',
      tópico1descrição: 'Uma forma de levantamento de peso voltado principalmente para o treinamento dos músculos peitorais maiores, mas que também envolve, como sinergistas, os músculos deltóide, serrátil anterior, coracobraquial e tríceps braquial.',
      tópico2descrição: 'Supino fortalece peito, ombros e tríceps além que trabalha vários grupos musculares e faz o treino ser rápido e assertivo.',
      vídeo: 'https://youtu.be/WwXS2TeFmeg',
    },

    {
      id: 'Exercício Físico 7',
      nome: 'Esteira',
      descricao: 'Aprimore sua aptidão.',
      imagem: '../Img_ExercicioFisico.Js/Esteira.jpg',
      tópico1descrição: 'A caminhada na esteira envolve a queima de calorias e o controle sobre a atividade. Afinal, a maioria desses equipamentos possui um painel onde o praticante pode visualizar a quantidade de calorias perdidas, o tempo do exercício, a distância percorrida e até os batimentos cardíacos.',
      tópico2descrição: 'Tonifica os músculos, Ajuda a diminuir a pressão arterial, Melhora a circulação sanguínea e Amplia a capacidade pulmonar.',
      vídeo: 'https://youtu.be/raa5u4CF2Q4',
    },

    {
      id: 'Exercício Físico 8',
      nome: 'Ginástica',
      descricao: 'Seja flexível.',
      imagem: '../Img_ExercicioFisico.Js/Ginástica.jpg',
      tópico1descrição: 'Uma prática corporal que envolve aspectos físicos como flexibilidade, coordenação motora e força. Ela pode ser competitiva, caracterizada como esporte, e não competitiva, como exercício físico em prol da saúde e bem-estar.',
      tópico2descrição: 'Desenvolve a saúde, a condição física e a integração social. Além disso, contribui para o bem-estar físico e psíquico, sendo um fator cultural e social.',
      vídeo: 'https://youtu.be/jbw4lGsvd74',
    },

    {
      id: 'Exercício Físico 9',
      nome: 'Ioga',
      descricao: 'Paz Interior.',
      imagem: '../Img_ExercicioFisico.Js/Ioga.jpg',
      tópico1descrição: 'Tem como objetivo trabalhar o corpo e a mente de forma interligada, realizando exercícios que auxiliam no controle da ansiedade, dores no corpo e estresse.',
      tópico2descrição: 'Melhora o funcionamento do coração, pois regula a circulação sanguínea e o sistema nervoso, além de equilibrar o sistema endócrino, controlando os níveis de hormônios do estresse. Ela ajuda também no controle da respiração, devido aos exercícios de expansão dos pulmões e controle da respiração.',
      vídeo: 'https://youtu.be/QbxPUFl3cuc',
    },

    {
      id: 'Exercício Físico 10',
      nome: 'Pilates',
      descricao: 'Ajeitando a Coluna.',
      imagem: '../Img_ExercicioFisico.Js/Pilates.jpg',
      tópico1descrição: 'Pilates é um método de condicionamento físico criado na Alemanha na década de 20. É indicado para reabilitação física, condicionamento físico geral e bem-estar. Os exercícios físicos condicionam e energizam. O método promove harmonia e balanço muscular para todas as idades e níveis de condicionamento físico, já que a atividade é direcionada às necessidades individuais da pessoa.',
      tópico2descrição: 'Melhora a flexibilidade, ajuda a aliviar as dores de costas, aumenta a densidade óssea e a frequência cardíaca. ',
      vídeo: 'https://youtu.be/1Nc3OvOPNE4',
    },

    {
      id: 'Exercício Físico 11',
      nome: 'Ciclismo',
      descricao: 'Sem as rodinhas.',
      imagem: '../Img_ExercicioFisico.Js/Bicicleta.jpg',
      tópico1descrição: 'Um exercício que acelera o seu metabolismo, ou seja, faz com que o seu corpo queime calorias mais rapidamente.',
      tópico2descrição: 'Vai fazer com que você ganhe força muscular e tônus, sobretudo na parte inferior do seu corpo. Empurrar os pedais envolve seus quadríceps, os músculos das coxas, e os glúteos.',
      vídeo: 'https://youtu.be/AqpBLz6S2KE',
    },

    {
      id: 'Exercício Físico 12',
      nome: 'Skate',
      descricao: 'Definição de Estilo.',
      imagem: '../Img_ExercicioFisico.Js/Skate.jpg',
      tópico1descrição: 'Andar de skate é realizado em uma prancha, chamada shape, com quatro rodas pequenas e dois eixos chamados de “trucks”. As manobras executadas com baixo e alto grau de dificuldade consistem em deslizar sobre o solo e obstáculos.',
      tópico2descrição: 'Um exercício que trabalha e fortalece todo o corpo, principalmente panturrilhas, quadríceps,abdômen e trapézio. Além disso, andar de skate por uma hora pode queimar até 700 calorias.',
      vídeo: 'https://youtu.be/ruQIQkYGV-Q',
    },

    {
      id: 'Exercício Físico 13',
      nome: 'Patinar',
      descricao: 'Equilíbrio é Essencial.',
      imagem: '../Img_ExercicioFisico.Js/Patinar.jpg',
      tópico1descrição: 'Os patins podem ser usados como recreação, atividade física e esportes competitivos.',
      tópico2descrição: 'Estimula todo o seu sistema cardiovascular, desenvolve os músculos do coração e melhora o fluxo sanguíneo.',
      vídeo: 'https://youtu.be/In7SOXxchQk',
    },

    {
      id: 'Exercício Físico 14',
      nome: 'Patinar no Gelo',
      descricao: 'Veja o seu rastro.',
      imagem: '../Img_ExercicioFisico.Js/Patinar no gelo.jpg',
      tópico1descrição: 'Ato de usar patins com lâminas no lugar de rodas para deslizar em superfícies cobertas de gelo. Pode de ser uma atividade recreativa, também é usada em vários esportes de competição.',
      tópico2descrição: 'Estimula todo o seu sistema cardiovascular, desenvolve os músculos do coração e melhora o fluxo sanguíneo.',
      vídeo: 'https://youtu.be/nxzpRiLja4w',
    },

    {
      id: 'Exercício Físico 15',
      nome: 'Kinect Games',
      descricao: 'Entre no Jogo.',
      imagem: '../Img_ExercicioFisico.Js/Kinect Games.png',
      tópico1descrição: 'O sensor Kinect é um produto herdado originalmente lançado para o Xbox 360 e, em seguida, para a série Xbox One com o Adaptador Kinect. O Kinect possui uma câmera embutida que permite jogar jogos interativos, tirar fotos e muito mais.',
      tópico2descrição: 'Promove a melhora na aptidão física. Além disso, podem aumentar a motivação para o exercício físico e podem ser utilizados para reabilitação física.',
      vídeo: 'https://youtu.be/Ql2bUcLH0Pc',
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


// Função para filtrar os cards
function filtrarCards() {
  const ambiente = document.querySelector("#filtro select[name='ambiente']").value;
  const necessidade = document.querySelector("#filtro select[name='necessidade']").value;
  const duracao = document.querySelector("#filtro select[name='duracao']").value;

  const filteredCards = cards.filter((card) => {
    const cardAmbiente = card.dataset.ambiente;
    const cardNecessidade = card.dataset.necessidade;
    const cardDuracao = card.dataset.duracao;

    return (
      (ambiente === "Sem Filtro" || cardAmbiente === ambiente) &&
      (necessidade === "Sem Filtro" || cardNecessidade === necessidade) &&
      (duracao === "Sem Filtro" || cardDuracao === duracao)
    );
  });

  // Salva os filtros selecionados no localStorage
  localStorage.setItem("filtroAmbiente", ambiente);
  localStorage.setItem("filtroNecessidade", necessidade);
  localStorage.setItem("filtroDuracao", duracao);

  // Atualiza os cards exibidos
  atualizarCards(filteredCards);
}

// Função para atualizar os cards exibidos
function atualizarCards(filteredCards) {
  const exibirCardsContainer = document.getElementById("exibirCards");
  exibirCardsContainer.innerHTML = "";

  filteredCards.forEach((card) => {
    exibirCardsContainer.appendChild(card);
  });
}

// Função para carregar os filtros salvos no localStorage
function carregarFiltros() {
const filtroAmbiente = localStorage.getItem("filtroAmbiente");
const filtroNecessidade = localStorage.getItem("filtroNecessidade");
const filtroDuracao = localStorage.getItem("filtroDuracao");

// Define os valores selecionados nos filtros
document.querySelector("#filtro select[name='ambiente']").value = filtroAmbiente;
document.querySelector("#filtro select[name='necessidade']").value = filtroNecessidade;
document.querySelector("#filtro select[name='duracao']").value = filtroDuracao;

// Filtra os cards com base nos valores salvos
filtrarCards();
}

// Evento de carregamento da página
window.addEventListener("load", function () {
preencherCards();
carregarFiltros();
});
    
