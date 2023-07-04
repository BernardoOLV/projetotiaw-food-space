if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = 'login.html';
}

function BuscarFavoritas() {
    var usuario = localStorage.getItem("userLogado");
    var objetoUsuario = JSON.parse(usuario);


    var receitas = localStorage.getItem("receitas");
    var objetoReceita = JSON.parse(receitas);
    var cardsFavoritos = document.getElementById("receitasFavoritas");
    var htmlFavoritos = "";
    var strId = "";

    for (let i = 0; i < 30; i++) {
        if (objetoReceita[i].favorito) {
            htmlFavoritos +=
                `<div class="receitas card col-10 col-sm-5  col-md-3 m-1 p-1 rounded" style="max-height: 250px; min-height: 200px" id="${objetoReceita[i].id}">
                 <div class="card-body mt-3 m-1 p-0 text-center rounded"><a class="nav-link active" href="receitas_cards.html?id=${objetoReceita[i].id}">
                   <h4 class="p-1">${objetoReceita[i].nome}</h4>
                 </div>
                 <div>
                 <h5 class="text-center mt-1">Tags:</h5>
                 <ul class="lh-lg">
                 <li>${objetoReceita[i].refeicao}</li>
                 <li>${objetoReceita[i].restricao}</li>
                 </ul>
                 </div></a>
              </div>`;
            strId += i + ";"
        }
    }
    cardsFavoritos.innerHTML = htmlFavoritos;

    var vetId = strId.split(";");
    //alert(vetId)
    objetoUsuario.idFavoritados = vetId;
    // Atualizar o localStorage
    localStorage.setItem("userLogado", JSON.stringify(objetoUsuario));


}


window.onload = BuscarFavoritas;