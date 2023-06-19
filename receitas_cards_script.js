function selectCard(identificador){
    var conteudoDescricao = document.getElementById("descricaoReceita");
    var getReceita = localStorage.getItem('receita_' + identificador)
    var objetoReceita = JSON.parse(getReceita)
    var htmlDescricao = "";
    var cardDescricao = 
        `          <div class="row mt-4">
        <div class="col-12">
          <a class="position-absolute top-0 end-0 m-4" href="receitas.html"><button type="button" class="btn-close"
              aria-label="Close"></button></a>
          <h1 class="text-center mt-5">${objetoReceita.nome}</h1>
        </div>

      </div>

      <div class="row mt-4">
        <div class="col-12 col-md-4 mb-4">
          <h4 class="text-center">Ingredientes</h4>
          <ul>
            <li style="list-style-type: circle;">${objetoReceita.ingredientes}</li>
            
          </ul>

          
          <h4 class="text-center mt-5">Tags:</h4>
          <ul class="lh-lg">
          <li>${objetoReceita.tag}</li>
          </ul>
          
          <h4 class="text-center mt-5">Curtidas:</h4>
          <p class="fs-6 text-center"><i class="fa-solid fa-heart" style="color: #ff0000;"></i> ${objetoReceita.curtidas}</p>

        </div>

        <div class="col-12 col-md-8 mb-5">
          <div id="Preparo">
            <h4 class="text-center">Modo de Preparo</h4>
            <p>
              ${objetoReceita.modoPreparo}
            </p>
          </div>

        </div>

      </div>
`;
htmlDescricao += cardDescricao;
conteudoDescricao.innerHTML = htmlDescricao;


}
