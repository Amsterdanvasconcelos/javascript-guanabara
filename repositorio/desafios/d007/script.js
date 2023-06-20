const button = document.querySelector('button')
const contacaoDolar = 
    prompt('Antes de tudo. Quanto está a cotação do dólar agora?')

button.addEventListener('click', () => {
    const saida = document.querySelector('div');
    const naCarteira = prompt('Quanto R$ você tem na carteira?')
    const converEmDolar = naCarteira / contacaoDolar;

    function formatarReal({ valor }) {
        return Number(valor).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    function formatarDolar({ valor }) {
        return Number(valor).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'USD'
        })
    }

    saida.innerHTML = 
        `<p>Com os ${formatarReal({ valor: naCarteira })} reias você `+
        `conseguirá comprar ${formatarDolar({ valor: converEmDolar })} dolares.</p>`
});