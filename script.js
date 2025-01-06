let posX = 0;
let posY = 0;

function moverBotao() {
    // Pegando o botão "não"
    const botaoNao = document.getElementById('nao');
    
    // Movendo o botão "não" para um novo local aleatório
    posX = Math.floor(Math.random() * (window.innerWidth - 200));
    posY = Math.floor(Math.random() * (window.innerHeight - 100));

    // Alterando a posição do botão "não"
    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${posX}px`;
    botaoNao.style.top = `${posY}px`;
}

function mostrarMensagem() {
    alert('Eu te amo, Larissa! 💖');
}