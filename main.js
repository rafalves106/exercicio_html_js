let campoA;
let campoB;
const formulario = document.getElementById('form-number')

// Evitar que o formuário funcione como o padrão
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    verificarCampos();
});


// Adicionando a Função que exibe a Mensagem de Sucesso
function exibirMensagemSucesso(){
    const mensagemSucesso = `O Número <b>${campoA.value}</b> do campo A é menor que o número <b>${campoB.value}</b> do campo B`;
    const containerMensagemSucesso = document.querySelector('.sucess-message');
    
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    document.querySelector('.error-message').style.display = 'none';

    campoA.value = '';
    campoB.value = '';
    
    campoB.classList.remove('error-border');
}


// Adicionando a Função que exibe a Mensagem de Erro
function exibirMensagemErro(){
    const mensagemError = `O Número <b>${campoA.value}</b> do campo B é menor ou igual ao número <b>${campoB.value}</b> do campo A`;
    const containerMensagemError = document.querySelector('.error-message');

    containerMensagemError.innerHTML = mensagemError;
    document.querySelector('.error-message').style.display = 'block';
    document.querySelector('.sucess-message').style.display = 'none';

    campoB.classList.add('error-border');
}


// Adicionando a Função que verifica os campos e ativa as mensagens de erro ou sucesso
function verificarCampos() {
    campoA = document.getElementById('campo-a');
    campoB = document.getElementById('campo-b');


    if (parseFloat(campoB.value) > parseFloat(campoA.value)){
        exibirMensagemSucesso();
    } else if (parseFloat(campoB.value) <= parseFloat(campoA.value)) {
        exibirMensagemErro();
    }
}