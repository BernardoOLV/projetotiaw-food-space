if(localStorage.getItem('token') == null){
  alert('Você precisa estar logado para acessar essa página')
  window.location.href ='login.html';
}
var objetoReceita;

function selectCard(identificador) {
  var conteudoDescricao = document.getElementById("descricaoReceita");
  var receitas = localStorage.getItem("receitas");
  objetoReceita = JSON.parse(receitas);
  var strIngredientes = "";
  strIngredientes = JSON.stringify(objetoReceita[identificador].ingredientes);
  var vetIngredientes = strIngredientes.split(",");
  var textoIngredientes = "";
  for(let i = 0; i< vetIngredientes.length; i++)
  {
    textoIngredientes += vetIngredientes[i];
    textoIngredientes += "<br>"
  }
  textoIngredientes = textoIngredientes.replace(/["]/g, "")
  textoIngredientes = textoIngredientes.replace(/\[|\]/g, "")




  var htmlDescricao = "";
  var cardDescricao =
    `<div class="row mt-4">
        <div class="col-12">
          <a class="position-absolute top-0 end-0 m-4" href="#"><button onclick="history.back()" type="button" class="btn-close"
              aria-label="Close"></button></a>
          <h1 class="text-center mt-5">${objetoReceita[identificador].nome}</h1>
        </div>

      </div>

      <div class="row mt-4">
        <div class="col-12 col-md-4 mb-4">
          <h4 class="text-center">Ingredientes</h4>
          <ul>
            <li;">${textoIngredientes}</li>
            
          </ul>

          
          <h4 class="text-center mt-5">Tags:</h4>
          <ul class="lh-lg">
          <li>${objetoReceita[identificador].refeicao}</li>
          <li>${objetoReceita[identificador].restricao}</li>
          </ul>
          <div class="text-center">
            <button type="button" onclick="Favoritar(${identificador})" class="btn text-center"><p class=" mt-2" id="campoEmoji"><i class="fa-regular fa-heart" style="color: #ff0000;"></i>Adicionar aos favoritos</p></button>
          </div>
        </div>

        <div class="col-12 col-md-8 mb-5">
          <div id="Preparo">
            <h4 class="text-center">Modo de Preparo</h4>
            <p>
              ${objetoReceita[identificador].modoPreparo}
            </p>
          </div>

        </div>

      </div>`;
  htmlDescricao += cardDescricao;
  conteudoDescricao.innerHTML = htmlDescricao;


}

function Favoritar(id){
  let campoEmoji = document.getElementById('campoEmoji');
  
  if (campoEmoji.innerHTML.includes("fa-regular")) {
    campoEmoji.innerHTML = `<i class="fa-solid fa-heart" style="color: #ff0000;"></i>Adicionar aos favoritos`;
    objetoReceita[id].favorito = true;
  } else {
    campoEmoji.innerHTML = `<i class="fa-regular fa-heart" style="color: #ff0000;"></i>Adicionar aos favoritos`;
    objetoReceita[id].favorito = false;
  }
  // Atualizar o localStorage
  localStorage.setItem("receitas", JSON.stringify(objetoReceita));
}

window.onload = () => {
  let idParametro = new URLSearchParams(window.location.search);
  let identificador = idParametro.get("id");
  selectCard(identificador);
}

