const button = document.querySelector('button')

button.addEventListener('click', () => {
    const saida = document.querySelector('div')
    const nomeAluno = prompt('Qual o nome do aluno?')
    const nota01 = prompt(`Qual a primeira nota de ${nomeAluno}?`)
    const nota02 = prompt(`Qual a outra nota de ${nomeAluno}?`)
    const media = (Number(nota01) + Number(nota02)) / 2

    function formatarNota({ nota }) {
        return Number(nota).toLocaleString('pt-br')
    }

    function formatarNome({ nome }) {
        const index0 = String(nome)[0].toUpperCase()
        const nomeFormatado = index0 + String(nome).slice(1).toLowerCase()
        return nomeFormatado
    }

    const nota01Format = formatarNota({ nota: nota01 })
    const nota02Format = formatarNota({ nota: nota02 })
    const mediaFormat = formatarNota({ nota: media })
    const nomeFormat = formatarNome({ nome: nomeAluno })
    
    saida.innerHTML = `<h2>Analisando a situação de ${nomeFormat}</h2>`

    if (media <= 3) {
        saida.innerHTML += 
            `<p>Com as notas ${nota01Format} e ${nota02Format} a média é <strong>${mediaFormat}</strong>.</p>`
        saida.innerHTML += 
            `<p>
                Com média abaixo de 3,0 o aluno está <strong style="
                    background-color: #ff000040;
                    color: #ff0000;
                    padding: 0 3px;
                ">REPROVADO!</strong>
            </p>`
    } else if (media <= 6) {
        saida.innerHTML += 
            `<p>Com as notas ${nota01Format} e ${nota02Format} a média é <strong>${mediaFormat}</strong>.</p>`
        saida.innerHTML += 
            `<p>
                Com média entre 3,0 e 6,0 o aluno está em <strong style="
                    background-color: #ff660040;
                    color: #ff6600;
                    padding: 0 3px;
                ">RECUPERAÇÃO!</strong>
            </p>`
    } else {
        saida.innerHTML += 
            `<p>Com as notas ${nota01Format} e ${nota02Format} a média é <strong>${mediaFormat}</strong>.</p>`
        saida.innerHTML += 
            `<p>
                Com média acima de 6,0 o aluno está <strong style="
                    background-color: #00ff0040;
                    color: #00ff00;
                    padding: 0 3px;
                ">APROVADO!</strong>
            </p>`
    }
})