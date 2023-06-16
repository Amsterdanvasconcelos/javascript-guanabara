const button = document.querySelector('button');

button.addEventListener('click', () => {
    const saida = document.querySelector('div');
    const primeiroValor = Number(prompt('Primeiro valor:'));
    const segundoValor = Number(prompt('Segundo valor:'));
    const operador = Number(prompt(
        `Valores informados: ${primeiroValor} e ${segundoValor}.
        O que vamos fazer?
        [1] Somar
        [2] Subtrair
        [3] Multiplicar
        [4] Dividir`
    ));
    //Diminuíndo o tamanho do nome da variável;
    const n1 = primeiroValor;
    const n2 = segundoValor;
    console.log(operador)

    switch (operador) {
        case 1:
            saida.innerHTML = `<p>${n1} + ${n2} = ${n1 + n2}</p>`;
            break;
        case 2:
            saida.innerHTML = `<p>${n1} - ${n2} = ${n1 - n2}</p>`;
            break;
        case 3:
            saida.innerHTML = `<p>${n1} x ${n2} = ${n1 * n2}</p>`;
            break;
        case 4:
            saida.innerHTML = `<p>${n1} / ${n2} = ${n1 / n2}</p>`;
            break;
        default:
            break;
    }
});