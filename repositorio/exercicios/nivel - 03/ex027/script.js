const button = document.querySelector('button');

button.addEventListener('click', () => {
    const saida = document.querySelector('[data-saida="saida"]');
    const numb = Number(document.querySelector('#numb').value);

    saida.innerHTML = `<p><strong>Tabuada de ${numb}</strong></p>`;

    let pass = 1;
    while (pass <= 10) {
        saida.innerHTML += 
            `${numb} x ${pass} = <strong>${numb * pass}</strong><br>`;
        pass++;
    }
});