const button = document.querySelector('button')

button.addEventListener('click', () => {
    const saida = document.querySelector('div')
    const precoAnterior = Number(prompt('Qual era o preço anterior do produto?'))
    const precoAtual = Number(prompt('Qual é o preço atual do produto?'))

    function formatarMoeda({ valor }) {
        return Number(valor).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    saida.innerHTML = '<h2>Analizando os valores informados.</h2>'
    saida.innerHTML += 
        `<p>O produto custava ${formatarMoeda({ valor: precoAnterior })} e `+
        `agora custa ${formatarMoeda({ valor: precoAtual})}.</p>`

    if (precoAnterior < precoAtual) {
        const precoSubiu = precoAtual - precoAnterior
        const variaçãoPorcentagem = precoSubiu * 100 / precoAnterior
        saida.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        saida.innerHTML += `<p>O preço subiu ${formatarMoeda({ valor: precoSubiu })} em relação ao preço anterior.</p>`
        saida.innerHTML += `<p>Uma variação de ${variaçãoPorcentagem.toFixed(2)}% para cima.</p>`
    } else if (precoAnterior > precoAtual) {
        const precoBaixou = precoAnterior - precoAtual
        const variaçãoPorcentagem = precoBaixou * 100 / precoAnterior
        saida.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        saida.innerHTML += `<p>O preço baixou ${formatarMoeda({ valor: precoBaixou })} em relação ao preço anterior.</p>`
        saida.innerHTML += `<p>Uma variação de ${variaçãoPorcentagem.toFixed(2)}% para baixo.</p>`
    } else {
        saida.innerHTML += `<p>Os preço se manteve igual.</p>`
    }
})