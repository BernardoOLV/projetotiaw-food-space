function selectCard(identificador) {
  var conteudoDescricao = document.getElementById("descricaoReceita");
  var receitas = localStorage.getItem("receitas");
  var objetoReceita = JSON.parse(receitas);
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
          <a class="position-absolute top-0 end-0 m-4" href="receitas.html"><button type="button" class="btn-close"
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
          <li>${objetoReceita[identificador].tag}</li>
          </ul>
          <div class="text-center">
            <h4 class="text-center mt-5">Curtidas:</h4>
            <button type="button" class="btn  text-center"><p class=" mt-2"><i class="fa-solid fa-heart" style="color: #ff0000;"></i>Adicionar aos favoritos</p></button>
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

window.onload = () => {
  let idParametro = new URLSearchParams(window.location.search);
  let identificador = idParametro.get("id");
  selectCard(identificador);
}

