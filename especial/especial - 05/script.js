const btnAddValor = document.querySelector('#adicionar');
const btnFinalizar = document.querySelector('#finalizar');
const inputNumber = document.querySelector('#numb');
const saida = document.querySelector('#saida');
let valores = [];

function criarOption() {
    const inputNumberFormat = Number(inputNumber.value);
    const tagSelect = document.querySelector('#select');

    const menorQ1ouMaiorQ100 = inputNumberFormat > 100 || inputNumberFormat < 1;
    const jaIncluído = valores.includes(inputNumberFormat);
    const lengthZero = inputNumberFormat.length == 0;

    if (menorQ1ouMaiorQ100 || lengthZero) {
        alert('[ERRO] Valor inválido!')
    } else {
         if (jaIncluído) {
            alert('[ERRO] Valor já incluído anteriormente.')
        } else {
            const option = document.createElement('option');
            valores.push(inputNumberFormat);
            option.innerText = `Valor ${inputNumberFormat} adicionado.`;
            tagSelect.append(option);
        } 
    }
    saida.innerHTML = '';
    inputNumber.value = '';
    inputNumber.focus();
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

btnAddValor.addEventListener('click', criarOption);
inputNumber.addEventListener('keyup', e => {
    const key = e.which || e.keyCode;
    if (key == 13) {
        criarOption();
    }
});
btnFinalizar.addEventListener('click', finalizar);


