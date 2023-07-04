if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página')
    window.location.href ='login.html';
  }
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
        receitas = [];
        for(let i = 0; i<30; i++){
            var receitaAtual = dados[i];
            var ref = "";
            var rest = "";

            if(i == 0 || i == 5 || i == 20 || i == 21){
                ref = "Café da Manhã"
            }else if (i == 1 || i ==3 || i==9 || i==12 || i ==15 || i==16 || i ==26 || i ==28 || i == 29){
                ref = "Lanche"
            }else{
                ref = "Almoço e Jantar"
            }

            if(i == 2 || i == 4 || i == 18 || i == 24){
                rest = "Zero Glúten"
            }
            else if(i == 9 || i == 17){
                rest = "Zero Lactose"
            }
            else if(i == 3 || i == 10 || i == 15 || i == 19){
                rest = "Lacto-vegetariano"
            }
            else if(i == 0 || i == 12 || i == 21 || i == 29){
                rest = "Ovo-lacto-vegetariano"
            }
            else if(i == 5 || i == 20){
                rest = "Vegetariano Estrito"
            }
            else if(i == 11 || i == 16){
                rest = "Baixo Colesterol"
            }
            else{
                rest = "Zero Açúcar"
            }

            var receitaStorage = {
                id: i,
                nome: receitaAtual.nome,
                ingredientes: receitaAtual.secao[0].conteudo,
                modoPreparo: receitaAtual.secao[1].conteudo,
                refeicao: ref,
                restricao: rest,
                favorito: false,
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

    for(let i=0; i<30;i++){

        htmlcafedamanha += 
    `<div class="receitas card col-10 col-sm-5  col-md-3 m-1 p-1 rounded" style="max-height: 250px" id="${receitas[i].id}">
        <div class="card-body mt-3 m-1 p-0 text-center rounded"><a class="nav-link active" href="receitas_cards.html?id=${receitas[i].id}">
            <h5 class="p-1">${receitas[i].nome}</h5></a>
        </div>
     </div>`
}
    conteudoCards.innerHTML = htmlcafedamanha;
}

var receitasFiltradas = [];

function filtro(){
    var cardfilt = "";
    var restr = document.getElementById("selectrestricao").value;
    var refei = document.getElementById("selectrefeicao").value;
    receitasFiltradas = receitas.filter(function (receita){
        return (
            (restr === "Geral" || receita.restricao === restr) &&
            (refei === "Geral" || receita.refeicao === refei)
        );
    });

    if (receitasFiltradas.length == 0){
        cardfilt = "<h1 class= 'text-center mt-5'> Nenhuma receita encontrada! </h1>"
        document.getElementById("cafe").innerHTML = cardfilt;
    }
    else{
        exibirReceitasFiltradas()
    }
}

function exibirReceitasFiltradas() {
    var conteudoCards = document.getElementById("cafe");
    var htmlcafedamanha = "";

    for (let i = 0; i < receitasFiltradas.length; i++) {
        htmlcafedamanha += 
        `<div class="card col-10 col-sm-5  col-md-3 m-1 p-1 rounded" style="max-height: 250px" id="${receitasFiltradas[i].id}">
            <div class="card-body mt-3 m-1 p-0 text-center rounded">
                <a class="nav-link active" href="receitas_cards.html?id=${receitasFiltradas[i].id}">
                    <h5 class="p-1">${receitasFiltradas[i].nome}</h5>
                </a>
            </div>
        </div>`;
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