
function Validar() {
    // Referências aos elementos do formulário
    var nomeInput = document.getElementById('nome');
    var sobrenomeImput = document.getElementById('sobrenome');
    var emailInput = document.getElementById('email');
    var senhaInput = document.getElementById('senha');
   
    // Atribuindo valores
    var nome = nomeInput.value;
    var sobrenome = sobrenomeImput.value;
    var email = emailInput.value;
    var senha = senhaInput.value;

    if(nome != "" && sobrenome != "" && email != "" && senha != ""){
      Cadastrar(nome, sobrenome, email, senha)
      window.location.href = 'login.html';
      alert("Cadastro feito com sucesso!")
    }
  }

function Cadastrar(nomeCad, sobrenomeCad, emailCad, senhaCad){
  let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
  var ultimoId = listaUser.length > 0 ? listaUser[listaUser.length - 1].id : -1;
  listaUser.push(
    {
      id: ultimoId + 1,
      nome: nomeCad,
      sobrenome: sobrenomeCad,
      email: emailCad,
      senha: senhaCad,
      idFavoritados: []
    }
  )

  localStorage.setItem('listaUser', JSON.stringify(listaUser));

}


  
  