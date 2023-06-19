function carregarProdutos(dados){
    var conteudoCards = document.getElementById("cafe");
    var htmlcafedamanha = "";
    let receita = []

    for(let i = 0; i<dados.length; i++){
        receita.push(dados[i])

    }
    if(receita.length == 0)
    {
        stringProdutos = "<h1 class= 'text-center mt-5'> Nenhuma receita encontrada! </h1>"
    }
    else
    {
        for(let i = 0; i<30; i++){
            var receitaAtual = receita[i];
            var receitaStorage = {
                id: i,
                nome: receitaAtual.nome,
                ingredientes: receitaAtual.secao[0].conteudo,
                modoPreparo: receitaAtual.secao[1].conteudo,
                tag: "geral",
                curtidas: 0,
            };

            //salvando como string no ls
            localStorage.setItem('receita_' + i, JSON.stringify(receitaStorage)); 


            var cardProduto = 
            `<div class="card col-10 col-sm-5 col-md-3 m-1 p-1 rounded" style="height: 200px" id="${i}" onclick="selectCard(${i})">
                <div class="card-body mt-3 m-1 p-0 text-center rounded"><a class="nav-link active" href="receitas_cards.html">
                    <h5 class="p-1">${receitaAtual.nome}</h5></a>
                </div>
                <p class="fs-6 text-center"><i class="fa-solid fa-heart" style="color: #ff0000;"></i> 0 Curtidas</p>
             </div>`

              htmlcafedamanha += cardProduto;
        }
        conteudoCards.innerHTML = htmlcafedamanha;
    }
}

function Api(){
    fetch('https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json')
    .then(res=>res.json())
    .then(dados=>carregarProdutos(dados))
}

window.onload = Api()