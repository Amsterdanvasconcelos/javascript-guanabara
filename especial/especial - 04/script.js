const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    const numb = document.querySelector('#numb').value;
    const saida = document.querySelector('select');

    if (numb == '') {
        alert('[ERRO] Digite um valor!');
    } else {
        saida.innerText = '';
        let multiplicador = 1;
        while (multiplicador <= 10) {
            const option = document.createElement('option');
            const multiplicacao = numb * multiplicador;
            option.innerText = `${numb} x ${multiplicador} = ${multiplicacao}`;
            saida.append(option);
            multiplicador++;
        }
    }
});