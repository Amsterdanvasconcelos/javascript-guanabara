const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const anoNasci = document.querySelector('#nasc').value;
    
    if (anoNasci == '' || anoNasci > anoAtual) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        const anoAtual = new Date().getFullYear();
        const idade = anoAtual - anoNasci;
        const sexoInput = document.getElementsByName('sexo');
        const saida = document.querySelector('#saida');

        let sexo;
        if (sexoInput[0].checked) {
            sexo = 'homem';
        } else {
            sexo = 'mulher';
        }

        const artigo = sexo == 'homem' ? 'um' : 'uma';
        const substantivo = idade < 2 ? 'ano' : 'anos';
        saida.innerHTML = 
            `<p>Detectamos ${artigo} ${sexo} de ${idade} ${substantivo}.</p>`

        const img = document.createElement('img');
        if (idade < 11) {
            img.src = `imgs/${sexo}_criança.png`;
        } else if (idade < 23) {
            img.src = `imgs/${sexo}_jovem.png`;
        } else if (idade < 55) {
            img.src = `imgs/${sexo}.png`;
        } else {
            img.src = `imgs/${sexo}_idoso.png`;
        }
        saida.append(img);
    }
});