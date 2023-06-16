const button = document.querySelector('button');

button.addEventListener('click', () => {
    const saida = document.querySelector('[data-saida="saida"]');
    const numeroFinal = Number(document.querySelector('#numb').value);

    for (let pass = 0 ; pass <= numeroFinal ; pass++) {
        saida.innerText += pass < numeroFinal ? ` ${pass},` : ` ${pass}`;
    }
});