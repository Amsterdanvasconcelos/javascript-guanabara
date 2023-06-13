const btn01 = document.querySelectorAll('button')[0];
const btn02 = document.querySelectorAll('button')[1];
const btn03 = document.querySelectorAll('button')[2];
const btn04 = document.querySelectorAll('button')[3];
const saida = document.querySelector('div');

function textF(event) {
    const itemId = event.target.id;
    let cardinal = '';

    switch (itemId) {
        case 'btn1':
            cardinal = 'primeiro';
            break;
        case 'btn2':
            cardinal = 'segundo';
            break;
        case 'btn3':
            cardinal = 'terceiro';
            break;
        case 'btn4':
            cardinal = 'quarto';
        default:
            break;
    }

    saida.innerHTML += `<p>Clicou no ${cardinal} botão</p>`;
}

btn01.addEventListener('click', event => textF(event));
btn02.addEventListener('click', event => textF(event));
btn03.addEventListener('click', event => textF(event));
btn04.addEventListener('click', event => textF(event));