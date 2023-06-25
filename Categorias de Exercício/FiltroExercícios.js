// Capturar os elementos HTML do filtro
const ambienteSelect = document.querySelector('#filtro select:nth-of-type(1)');
const necessidadeSelect = document.querySelector('#filtro select:nth-of-type(2)');
const duracaoSelect = document.querySelector('#filtro select:nth-of-type(3)');

// Adicionar um evento de mudança aos selects
ambienteSelect.addEventListener('change', filtrarCards);
necessidadeSelect.addEventListener('change', filtrarCards);
duracaoSelect.addEventListener('change', filtrarCards);

// Função para filtrar os cards
function filtrarCards() {
  const ambienteFiltro = ambienteSelect.value;
  const necessidadeFiltro = necessidadeSelect.value;
  const duracaoFiltro = duracaoSelect.value;

  // Percorrer todos os cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const ambienteCard = card.getAttribute('data-ambiente');
    const necessidadeCard = card.getAttribute('data-necessidade');
    const duracaoCard = card.getAttribute('data-duracao');

    // Verificar se o card atende aos filtros selecionados
    const ambienteMatch = ambienteFiltro === 'Geral' || ambienteFiltro === ambienteCard;
    const necessidadeMatch = necessidadeFiltro === 'Geral' || necessidadeFiltro === necessidadeCard;
    const duracaoMatch = duracaoFiltro === 'Geral' || duracaoFiltro === duracaoCard;

    // Exibir ou ocultar o card com base nos filtros
    if (ambienteMatch && necessidadeMatch && duracaoMatch) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

