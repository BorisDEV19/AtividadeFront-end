//efeito do botão voltar topo//

function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:"smooth",
        }
    )
}

//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementById("admin").value;
    var senha = document.getElementById("123456").value;

    if(usuario == 'admin' && senha == '123456'){
        logado == 1;
        window.location = "index.html"
        alert("Sucesso")
    }
    if(logado == 0){
        logado = 0;
        alert("Acesso Negado. Dados Incorretos")
    }
}
//Ativar alert no botão cadastrar

function cadastro() {
    alert("Cadastro com sucesso");
    window.location.href = "index.html";
}