const btnPensar = document.querySelectorAll('button')[0];
const btnLimpar = document.querySelectorAll('button')[1];
const saida = document.querySelector('div');

function pensarNumero() {
    const numero = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    saida.innerHTML += 
        `<p>Acabei de pensar no número <strong>${numero}</strong>!</p>`;
}

function limpar() {
    saida.innerHTML = 
        `<p>Cada vez que você apertar o botão acima, 
        eu penso em um número entre 1 e 100.</p>`;
}

btnPensar.addEventListener('click', pensarNumero);
btnLimpar.addEventListener('click', limpar);