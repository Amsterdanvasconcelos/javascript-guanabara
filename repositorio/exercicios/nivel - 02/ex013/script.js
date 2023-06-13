const button = document.querySelector('button');

button.addEventListener('click', () => {
    const saida = document.querySelector('div');
    const number = prompt('Digite um número: ');
    const outroNumber = prompt('Digite outro número: ');

    if (number > outroNumber) {
        saida.innerHTML = 
            `<p>Analisando os valores ${number} e ${
                outroNumber}, o maior valor é <strong>${number}</strong></p>`;
    } else if (number < outroNumber) {
        saida.innerHTML = 
            `<p>Analisando os valores ${number} e ${
                outroNumber}, o maior valor é <strong>${outroNumber}</strong></p>`;
    } else {
        saida.innerHTML = 
            `<p>Analisando os valores ${number} e ${
                outroNumber}, ambos são <strong>IGUAIS</strong></p>`;
    }
});