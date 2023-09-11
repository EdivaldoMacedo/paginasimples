// Função para gerar um número fictício e exibi-lo em um alerta
function gerarNumeroFicticio() {
    const numeroFicticio = Math.floor(Math.random() * 100); // Gera um número aleatório de 0 a 99
    alert(`0800-1234: ${numeroFicticio}`);
}

// Função para exibir uma mensagem ao clicar no botão "Sobre Nós"
function exibirMensagemSobreNos() {
    alert('Somos uma equipe dedicada à criação de conteúdo web.');
}

let numeroFicticioAtivo = false; // Inicialmente, desativado

// Adicionando os manipuladores de evento aos elementos do DOM após o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    const contatoButton = document.querySelector('nav ul li:nth-child(3) a'); // Botão "Contato"
    const sobreNosButton = document.querySelector('nav ul li:nth-child(2) a'); // Botão "Sobre Nós"

    contatoButton.addEventListener('click', function() {
        numeroFicticioAtivo = true; // Ativa o número fictício ao clicar em "Contato"
        gerarNumeroFicticio();
    });

    sobreNosButton.addEventListener('click', exibirMensagemSobreNos);
});
