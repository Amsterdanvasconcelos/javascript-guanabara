const button = document.querySelector('button');

button.addEventListener('click', () => {
    const saida = document.querySelector('div');
    const mes = prompt('Digite o mês em extenso (ex: Setembro)');
    const mesCapitalizado = mes[0].toUpperCase() + mes.slice(1);
    let estacao;

    switch (mes.toLowerCase()) {
        case 'janeiro': case 'fevereiro': case 'março':
            estacao = 'Inverno';
            break;
        case 'abril': case 'maio': case 'junho':
            estacao = 'Primavera';
            break;
        case 'julho': case 'agosto': case 'setembro':
            estacao = 'Verão';
            break;
        case 'outubro': case 'novembro': case 'dezembro':
            estacao = 'Outono';
            break;
        default:
            break;
    }

    saida.innerHTML += 
        `<p>No mês de ${mesCapitalizado}, estamos na estação ${estacao}.</p>`;

    //No mês de agosto, estamos na estação VERÃO.
});