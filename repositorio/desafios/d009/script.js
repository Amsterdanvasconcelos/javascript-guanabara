const button = document.querySelector('button')

button.addEventListener('click', () => {
    const saida = document.querySelector('div')
    const nomeFuncionario = prompt('Qual é o nome do funcionário?')
    const salarioAtual = 
        prompt(`Qual é o salário atual de ${
            formatarNome({ nome :nomeFuncionario })}?`)
    const porCentoAReajustar = 
        prompt(`Qual a porcentagem de reajuste do salário de ${
            formatarNome({ nome: nomeFuncionario })}?`)
    const reajuste = salarioAtual * porCentoAReajustar / 100
    console.log(typeof reajuste)
    const salarioReajustado = Number(salarioAtual) + reajuste
    
    function formatarNome({ nome }) {
        const index0 = nome[0].toUpperCase()
        const nomeFormatado = index0 + nome.slice(1).toLowerCase()
        return nomeFormatado
    }

    function formatarMoeda({ valor }) {
        return Number(valor).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    saida.innerHTML = 
        `<h2>${formatarNome(
            { nome: nomeFuncionario })} recebeu um aumento salarial!</h2>`
    saida.innerHTML += 
        `<p>O salário anterior era ${
            formatarMoeda({ valor: salarioAtual })}.</p>`
    saida.innerHTML += 
        `<p>Com um aumento de ${porCentoAReajustar}%, o salário vai aumentar ${
            formatarMoeda({ valor: reajuste })} no próximo mês.</p>`
    saida.innerHTML += 
        `<p>E apartir daí, ${formatarNome({ nome: nomeFuncionario })} vai `+
        `passar a ganhar ${formatarMoeda({ valor: salarioReajustado })}.</p>`
})