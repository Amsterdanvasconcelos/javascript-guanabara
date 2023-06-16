const button = document.querySelector('button');

button.addEventListener('click', () => {
    const saida = document.querySelector('[data-saida="saida"]');
    const numb1 = Number(document.querySelector('#numb1').value);
    const numb2 = Number(document.querySelector('#numb2').value);

    saida.innerText = '';
    if (numb1 == numb2) {
        saida.innerText = 'Não é possível contar, pois os números são iguais.'
    } else {
        if (numb1 > numb2) {
            for (let pass = numb1 ; pass >= numb2 ; pass--) {
                saida.innerText += pass > numb2 ? ` ${pass},` : ` ${pass}`;
            }
        } else {
            for (let pass = numb1 ; pass <= numb2 ; pass++) {
                saida.innerText += pass < numb2 ? ` ${pass},` : ` ${pass}`;
            }
        }
    }
});