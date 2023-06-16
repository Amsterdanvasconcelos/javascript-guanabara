const button = document.querySelector('button');

button.addEventListener('click', () => {
    const saida = document.querySelector('[data-saida="saida"]');

    saida.innerText = '';
    for (let pass = 1 ; pass <= 10 ; pass++) {
        if (pass % 2 == 0) {
            if (pass < 10) {
                saida.innerText += ` ${pass},`;
            } else {
                saida.innerText += ` ${pass}`;
            }
        }
    }
});