const btnAddValor = document.querySelector('#adicionar');
const btnFinalizar = document.querySelector('#finalizar');
const saida = document.querySelector('#saida');
let valores = [];

function criarOption() {
    const inputNumber = Number(document.querySelector('#numb').value);
    const tagSelect = document.querySelector('#select');

    const menorQ1ouMaiorQ100 = inputNumber > 100 || inputNumber < 1;
    const jaIncluído = valores.includes(inputNumber);
    const lengthZero = inputNumber.length == 0;

    if (menorQ1ouMaiorQ100 || lengthZero) {
        alert('[ERRO] Valor inválido!')
    } else {
         if (jaIncluído) {
            alert('[ERRO] Valor já incluído anteriormente.')
        } else {
            const option = document.createElement('option');
            valores.push(inputNumber);
            option.innerText = `Valor ${inputNumber} adicionado.`;
            tagSelect.append(option);
        } 
    }
    saida.innerHTML = '';
}

function somarItemsArray(array) {
    let soma = 0;
    for (let pass in array) {
        soma += array[pass]
    }
    return soma;
}

function maiorMenorValor(array, condicao) {
    array.sort((a, b) => a - b);
    if (condicao == 'maior') {
        return array[array.length - 1];
    } 
    if (condicao == 'menor') {
        return array[0];
    }
}

function media() {
    const soma = somarItemsArray(valores);
    return soma / valores.length;
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores para poder finalizar!')
    } else {
        saida.innerHTML = 
        `<p>A soma de todos os valores é ${somarItemsArray(valores)}.</p>`;
        saida.innerHTML +=
            `<p>A média dos valores adicionados é ${media().toFixed(2)}.</p>`
        saida.innerHTML += 
            `<p>Ao todo temos ${valores.length} números cadastrados.</p>`;
        saida.innerHTML +=
            `<p>O maior valor informado foi ${maiorMenorValor(valores, 'maior')}.</p>`;
        saida.innerHTML += 
            `<p>O menor valor informado foi ${maiorMenorValor(valores, 'menor')}.</p>`;
    }
}

btnAddValor.addEventListener('click', criarOption)
btnFinalizar.addEventListener('click', finalizar);

