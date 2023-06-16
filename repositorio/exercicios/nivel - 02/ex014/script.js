const button = document.querySelector('button');

button.addEventListener('click', () => {
    const saida = document.querySelector('div');
    const data = new Date();

    saida.innerHTML = 
        `<p>O que eu recebi do sistema foi <mark>${data}</mark></p>`;
});