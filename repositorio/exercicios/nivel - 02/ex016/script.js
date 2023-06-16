const button = document.querySelector('button');

button.addEventListener('click', () => {
    const saida = document.querySelector('div');
    const anoNascimento = prompt('Em que ano você nasceu?');
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    saida.innerHTML = 
        `<p>Quem nasceu em ${anoNascimento} vai completar 
        <strong>${idade}</strong> anos em 2023.</p>`;
});