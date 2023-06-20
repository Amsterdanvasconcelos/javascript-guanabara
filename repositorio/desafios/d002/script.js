const button = document.querySelector('[data-cumprimentos="cumprimentos"]');

button.addEventListener('click', () => {
    const pessoa = {};
    pessoa.nome = prompt('Olá! Qual é seu nome?')
    pessoa.idade = 
        prompt(`Seja bem-vindo, ${pessoa.nome}. Quantos anos você tem?`);

    alert(`Acabei de conhecer ${pessoa.nome}, que tem ${pessoa.idade} anos de idade!`);
});
