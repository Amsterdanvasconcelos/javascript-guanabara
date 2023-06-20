const button = document.querySelector('button')

button.addEventListener('click', () => {
    const saida = document.querySelector('div')
    const a = prompt('Qual o valor de a?')
    const b = prompt('Qual o valor de b?')
    const c = prompt('Qual o valor de c?')
    const valorDeDelta = b ** 2 - 4 * a * c

    saida.innerHTML = 
        '<h2>Resolvendo Bhaskara</h2>'
    saida.innerHTML += 
        `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`
    saida.innerHTML += 
        `<p>O calculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4 x ${a} x ${c}</strong></p>`
    saida.innerHTML += 
        `<p>O valor calculado foi <strong><mark>&Delta; = ${valorDeDelta}</mark></strong></p>`
})