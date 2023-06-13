const button = document.querySelector('button');

button.addEventListener('click', () => {
    const saida = document.querySelector('div');
    const nome = prompt('Qual é o nome do aluno?');
    const notaPrimeira = prompt(`Qual foi a primeira nota de ${nome}?`);
    const notaSegunda = 
        prompt(`Além de ${notaPrimeira}, qual foi a outra nota de ${nome}?`);
    const media = (Number(notaPrimeira) + Number(notaSegunda)) / 2;

    saida.innerHTML = `<p>Calculando a média final de ${nome}.</p>`;
    saida.innerHTML += 
        `<p>As notas obtidas foram ${notaPrimeira} e ${notaSegunda}.</p>`;
    saida.innerHTML += `<p>A média final será ${media}.</p>`;

    if (media > 6) {
        saida.innerHTML += 
            '<p style="color: green;"><strong>Meus parabéns!</strong></p>';
    } else {
        saida.innerHTML += 
            '<p style="color: red;"><strong>Estude um pouco mais!</strong></p>';
    }
});