const button = document.querySelector('button')

button.addEventListener('click', () => {
    const saida = document.querySelector('div')
    const inputAno = Number(prompt('Qual é o ano que você quer verificar?'))
    let bissexto;
    
    saida.innerHTML = `<h2>Analizando o ano de ${inputAno}...</h2>`
    
    if (inputAno % 4 === 0) {
        if (inputAno % 100 === 0) {
            if (inputAno % 400 === 0) {
                bissexto = true
            } else {
                bissexto = false
            }
        } else {
            bissexto = true
        }
    } else {
        bissexto = false
    }

    if (bissexto) {
        saida.innerHTML +=
            `<p>O ano de <strong 
                style="
                    background-color: #00ff0040;
                    color: green;
                    padding: 0 3px;
                ">${inputAno} é bissexto!</strong></p>`
    } else {
        saida.innerHTML += 
            `<p>O ano de <strong 
                style="
                    background-color: #ff000040;
                    color: red;
                    padding: 0 3px;
                ">${inputAno} não é bissexto!</strong></p>`
    }
})