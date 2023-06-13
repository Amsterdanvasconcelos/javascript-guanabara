const button = document.querySelector('button');

button.addEventListener('click', () => {
    const saida = document.querySelector('div');
    const numero = prompt('Digite um número:');
    
    const parOuImpar = () => {
        if (numero % 2 === 0) {
            return 'PAR';
        } else {
            return 'ÍMPAR';
        }
    }

    saida.innerHTML = 
        `<p>O número ${numero} que foi digitado é 
        <strong>${parOuImpar()}</strong>!</p>`;
});