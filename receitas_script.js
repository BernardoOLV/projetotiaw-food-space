var receitas = JSON.parse(localStorage.getItem("receitas"));

if(!receitas){
    receitas = []
}

function carregarProdutos(dados){
   
    if(dados.length == 0)
    {
        stringProdutos = "<h1 class= 'text-center mt-5'> Nenhuma receita encontrada! </h1>"
    }
    
    else
    {
        for(let i = 0; i<30; i++){
            var receitaAtual = dados[i];
            var receitaStorage = {
                nome: receitaAtual.nome,
                ingredientes: receitaAtual.secao[0].conteudo,
                modoPreparo: receitaAtual.secao[1].conteudo,
                tag: "geral",
                curtidas: 0,
            };

            receitas.push(receitaStorage)

        }

            //salvando como string no localstorage
        localStorage.setItem("receitas", JSON.stringify(receitas))

        exibir();


           
    }
}


function exibir(){
    var conteudoCards = document.getElementById("cafe");
    var htmlcafedamanha = "";

    for(let i=0; i<receitas.length;i++){

        htmlcafedamanha += 
    `<div class="card col-10 col-sm-5 col-md-3 m-1 p-1 rounded" style="height: 200px" id="${i}">
        <div class="card-body mt-3 m-1 p-0 text-center rounded"><a class="nav-link active" href="receitas_cards.html?id=${i}">
            <h5 class="p-1">${receitas[i].nome}</h5></a>
        </div>
        <p class="fs-6 text-center"><i class="fa-solid fa-heart" style="color: #ff0000;"></i> 0 Curtidas</p>
     </div>`
}
    conteudoCards.innerHTML = htmlcafedamanha;
}

function Api(){
    if(receitas.length == 0){
    fetch('https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json')
    .then(res=>res.json())
    .then(dados=>carregarProdutos(dados))
    }else{
        exibir();
    }
}

window.onload = Api()