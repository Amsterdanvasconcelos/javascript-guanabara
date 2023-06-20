const button = document.querySelector('button');

button.addEventListener('click', () => {
    const nomeProduto = prompt('Que produto você está comprando?');
    const preco = 
        prompt(`Qual o proço do ${nomeProduto} que você está comprando?`);
    const pagamento = 
        prompt(`Qual foi o valor que você deu para pagar ${nomeProduto}?`);
    const precoFormatado = formatarMoeda({ valor: preco });
    const pagamentoFormatado = formatarMoeda({ valor: pagamento });
    const trocoFormatado = formatarMoeda({ valor: pagamento - preco });
    
    if (pagamento < preco) {
        alert(
            `Você comprou ${nomeProduto} que custa ${precoFormatado}.\n`+
            `Deu ${pagamentoFormatado} em dinheiro. Mas está faltando ${trocoFormatado} para completar o pagamento.`
        );
    } else {
        alert(
            `Você comprou ${nomeProduto} que custa ${precoFormatado}.\n`+
            `Deu ${pagamentoFormatado} em dinheiro e vai receber ${trocoFormatado} de troco.\n`+
            'Volte sempre!'
        );
    }

    function formatarMoeda({ valor }) {
        return Number(valor).toLocaleString('pt-br', {
                style: 'currency', 
                currency: 'BRL', 
                signDisplay: 'never'
            });
    }
});