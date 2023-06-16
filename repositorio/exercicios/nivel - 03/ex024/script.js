const button = document.querySelector('button');

button.addEventListener('click', () => {
    const saida = document.querySelector('[data-saida="saida"]');

    for (let pass = 10 ; pass >= 1 ; pass--) {
        if (pass > 1) {
            saida.innerText += ` ${pass},`;
        } else {
            saida.innerText += ` ${pass}`;
        }
    }
});