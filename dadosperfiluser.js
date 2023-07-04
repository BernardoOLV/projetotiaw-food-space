if(localStorage.getItem('token') == null){
  alert('Você precisa estar logado para acessar essa página')
  window.location.href ='login.html';
}

var userLogado = JSON.parse(localStorage.getItem('userLogado'));
var campoEmail = document.getElementById('campoEmail');
var campoNome = document.getElementById('campoNome');
var campoSobrenome = document.getElementById('campoSobrenome');

campoEmail.innerHTML = `<strong>${userLogado.email}</strong>`;
campoNome.innerHTML = `<strong>${userLogado.nome}</strong>`;
campoSobrenome.innerHTML = `<strong>${userLogado.sobrenome}</strong>`;

function Sair(){
  localStorage.removeItem('token');
  window.location.href = 'login.html';
}


function saveData() {
  var nome = document.getElementById('nome').value;
  var sobrenome = document.getElementById('sobrenome').value;
  var senha = document.getElementById('senha').value;

  // Salvar os dados no Local Storage
  localStorage.setItem('dadosPessoais', JSON.stringify({
    nome: nome,
    sobrenome: sobrenome,
    senha: senha
  }));

  alert('PERFIL ATUALIZADO COM SUCESSO!');
}

function loadData() {
  var dadosPessoais = JSON.parse(localStorage.getItem('dadosUserss'));
  var i = JSON.parse(localStorage.getItem('logado'));


  if (dadosPessoais) {
    document.getElementById('nome').innerHTML = dadosPessoais[i].name;
    document.getElementById('sobrenome').innerHTML = dadosPessoais[i].sobrename;
    document.getElementById('email').innerHTML = dadosPessoais[i].email;
  }
}

function salvar() {
  var nomedit = document.getElementById("nameedit").value;
  dadosPessoais[i].name = nomedit;
  localStorage.setItem("Cadastro", JSON.stringify(dadosPessoais));
}


//JS da imagem do perfil de usuario
function previewImage(event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('profile-pic');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
