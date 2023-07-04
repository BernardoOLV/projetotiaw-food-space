function Logar() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let erro = document.getElementById('erro');

    if (email != "" && senha != "") {
        let listaUser = [];

        let userValid = {
            id: '',
            nome: '',
            sobrenome: '',
            email: '',
            senha: '',
            idFavoritados: []
        }

        listaUser = JSON.parse(localStorage.getItem('listaUser'));

        for(let i = 0;i <listaUser.length; i++){
            if (email == listaUser[i].email && senha == listaUser[i].senha) {
                userValid = {
                    id: listaUser[i].id,
                    nome: listaUser[i].nome,
                    sobrenome: listaUser[i].sobrenome,
                    email: listaUser[i].email,
                    senha: listaUser[i].senha,
                    idFavoritados: listaUser[i].idFavoritados
                };
            }
        }
        
        if(email == userValid.email && senha == userValid.senha){
            window.location.href = 'home.html';
            let token = Math.random().toString(16).substring(2)
            localStorage.setItem('token', token)
            localStorage.setItem('userLogado', JSON.stringify(userValid));
        }else{
            erro.innerHTML = `<strong>Email ou senha incorretos, tente novamente</strong style: red;>`
        }
    }

}