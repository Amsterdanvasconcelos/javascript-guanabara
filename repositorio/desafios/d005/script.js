const button = document.querySelector('button');

button.addEventListener('click', () => {
    const distanciaEmMetros = prompt('Digite uma distância em metros (m):');
    const saida = document.querySelector('div');
    const medidas = {
        Km: (distanciaEmMetros / 1000).toLocaleString('pt-br'),
        Hm: (distanciaEmMetros / 100).toLocaleString('pt-br'),
        Dam: (distanciaEmMetros / 10).toLocaleString('pt-br'),
        m: (distanciaEmMetros).toLocaleString('pt-br'),
        dm: (distanciaEmMetros * 10).toLocaleString('pt-br'),
        cm: (distanciaEmMetros * 100).toLocaleString('pt-br'),
        mm: (distanciaEmMetros * 1000).toLocaleString('pt-br')  
    }

    saida.innerHTML = 
        `<h2>A distâmcia de ${medidas.m} metros, corresponde a...</h2>`;
    saida.innerHTML += `<p>${medidas.Km} quilômetros (Km)</p>`;
    saida.innerHTML += `<p>${medidas.Hm} hectômetros (Hm)</p>`;
    saida.innerHTML += `<p>${medidas.Dam} decâmetros (Dam)</p>`;
    saida.innerHTML += `<p>${medidas.dm} decímetros (dm)</p>`;
    saida.innerHTML += `<p>${medidas.cm} centímetros (cm)</p>`;
    saida.innerHTML += `<p>${medidas.mm} milímetros (mm)</p>`;
});