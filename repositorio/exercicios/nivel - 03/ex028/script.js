const button = document.querySelector('button');

button.addEventListener('click', () => {
    const saida = document.querySelector('[data-saida="saida"]');
    const numb = Number(document.querySelector('#numb').value);

    function fatorial({ numb }) {
        if (numb == 1) {
            return 1;
        }
        return numb * fatorial({ numb: numb - 1 })
    }

    saida.innerHTML = `<p><strong>Calculando ${numb}!</strong></p>`;
    for (let pass = numb ; pass >= 1 ; pass--) {
        saida.innerHTML += pass > 1 ? ` ${pass} x` : ` ${pass} = `;
    }
    saida.innerHTML += `<strong>${fatorial({ numb })}</strong>`;
});