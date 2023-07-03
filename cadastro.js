function Cadastrar() {
    // Referências aos elementos do formulário
    var nomeInput = document.getElementById('nome');
    var sobrenomeImput = document.getElementById('sobrenome')
    var emailInput = document.getElementById('email');
    var senhaInput = document.getElementById('senha');
  
    // Atribuindo valores
    var nome = nomeInput.value;
    var sobrenome = sobrenomeImput.value;
    var email = emailInput.value;
    var senha = senhaInput.value;

    
  
    // Testes
    console.log('Nome:', nome); 
    console.log('Nome:', sobrenome);
    console.log('Email:', email);
    console.log('Senha:', senha);
  
  }
  
  