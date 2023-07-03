
let _dadodosUser1 = [
  { id: 1, name: 'Kaylan', sobrename: 'Subtil', email: 'kaylan10@gmail.com', senha: '1234', },
  { id: 2, name: 'Luis', sobrename: 'Felipe', email: 'luis10@gmail.com', senha: '1234', }
]

localStorage.setItem('dadosUserss', JSON.stringify(_dadodosUser1));




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
