const contar = document.querySelector('#contar');


contar.addEventListener('click', () => {
    const inicio = Number(document.querySelector('#inicio').value);
    const fim = Number(document.querySelector('#fim').value);
    const passo = Number(document.querySelector('#passo').value);
    const saida = document.querySelector('#saida');
    console.log('inicio:' + inicio);
    console.log('fim:' + fim);
    console.log('passo:' + passo);

    saida.innerHTML = '<p>Resultado:</p>';

    if (passo < 1) {
        alert('[ERRO] O passo não pode ser menor que 1')
    } else {
        if (inicio < fim) {
            for (let n = inicio ; n <= fim ; n += passo) {
                saida.innerHTML += n;
                saida.innerHTML += n < fim ? ' &#x1F449; ' : '';
            }
        } else {
            for (let n = inicio ; n >= fim ; n -= passo) {
                saida.innerHTML += n;
                saida.innerHTML += n > fim ? ' &#x1F449; ' : '';
            }
        }
    }
});


