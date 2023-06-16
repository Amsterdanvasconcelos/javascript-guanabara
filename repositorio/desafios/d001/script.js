const wrapperButtons = 
    document.querySelector('[data-mensagem="wrapper-buttons"]');

function mensagems(event) {
    console.log(event)
    const button = event.target;
    const btnData = button.dataset.mensagem;

    if (btnData == 'button-1') {
        alert('Você clicou no 1° botão!');
    } 
    if (btnData == 'button-2') {
        alert('Você clicou no 2° botão!');
    } 
    if (btnData == 'button-3') {
        alert('Você clicou no 3° botão!');
    }
}
    
wrapperButtons.addEventListener('click', event => {
    mensagems(event);
})