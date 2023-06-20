const button = document.querySelector('button');

button.addEventListener('click', () => {
    const number = Number(prompt('Digite um número inteiro qualquer:'));
    alert(
        `Antes de ${number}, temos o número ${number - 1}.\n` +
        `Depois de ${number}, temos o número ${number + 1}.`
    );
});

