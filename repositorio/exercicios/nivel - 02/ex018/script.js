const button = document.querySelector('button');
const numeroPensado = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(numeroPensado);

button.addEventListener('click', () => {
    const saida = document.querySelector('div');
    const palpite = prompt('Qual é o seu palpite?');

    if (palpite > numeroPensado) {
        saida.innerHTML += 
            `Você falou ${palpite}. Meu número é <strong>MENOR!</strong>`;
    } else if (palpite < numeroPensado) {
        saida.innerHTML += 
            `Você falou ${palpite}. Meu número é <strong>MAIOR!</strong>`;
    } else {
        saida.innerHTML += 
            `<strong>PARABÉNS!</strong> 
            Você acertou! Eu tinha sorteado o valor ${numeroPensado}!`;
            button.disabled = true;
    }
});