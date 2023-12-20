//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
    console.log("NO TOPO DA PAGINA AGORA!")
}

//Validação de Login
function login(){
    let logado=0
    const usuario=document.getElementById("usuario").value;
    const senha=document.getElementById("senha").value;

    if(usuario=='admin' && senha=="123"){
          window.location="index.html"
    }
    else{
        alert("Acesso negado! Nao há usuarios com os dados informados.")
    }
}
//Ativar alert no botão cadastrar


//alternar entre cadrastrar e login
function alternar_login_para_cadrastro(){
    console.log("ALTERNADO TELAS.....")
    const elemento_secao_login=document.getElementById("section-login")
    elemento_secao_login.style.display='none'
    const elemento_secao_cadrastro=document.getElementById("section-cadastro")
    elemento_secao_cadrastro.style.display='flex'
}
function alternar_cadrastro_para_login(){
    console.log("ALTERNADO TELAS.....")
    const elemento_secao_cadrastro=document.getElementById("section-cadastro")
    elemento_secao_cadrastro.style.display='none'
    const elemento_secao_login=document.getElementById("section-login")
    elemento_secao_login.style.display='block'
}


