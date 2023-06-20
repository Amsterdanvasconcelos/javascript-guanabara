const button = document.querySelector('button')
button.addEventListener('click', () => {
    const saida = document.querySelector('div')
    const nomeProduto = 
        prompt('Qual o nome do produtoo que você está comprando?')
    const preco = prompt(`Qual é o preço de ${nomeProduto}?`)
    const desconto10PorCento = preco * 10 / 100
    const precoComDesconto = preco - desconto10PorCento

    function formatarMoeda({ valor }) {
        return Number(valor).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    function formatarNome(nome) {
        const capitalizarIndex0 = String(nome)[0].toUpperCase()
        const nomeFormatado = capitalizarIndex0 + String(nome).slice(1).toLowerCase()
        return nomeFormatado
    }

    saida.innerHTML = `<h2>Calculando desconto de 10% para ${formatarNome(nomeProduto)}.</h2>`
    saida.innerHTML += 
        `<p>O preço original era ${formatarMoeda({ valor: preco })}.</p>`
    saida.innerHTML += 
        `<p>Você acaba de ganhar ${formatarMoeda({ valor: desconto10PorCento })} de desconto (-10%).</p>`
    saida.innerHTML += 
        `<p>No fim, você vai pagar ${formatarMoeda({ valor: precoComDesconto })} no produto ${formatarNome(nomeProduto)}.</p>`
})
