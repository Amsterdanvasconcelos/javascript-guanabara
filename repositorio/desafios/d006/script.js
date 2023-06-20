const button = document.querySelector('button');

button.addEventListener('click', () => {
    const temperatura = Number(prompt('Digite uma temperatura em C° (Celsius)'));
    const saida = document.querySelector('div');
    const tempEmFah = temperatura * (9/5) + 32;
    const tempEmKel = temperatura + 273.15;

    saida.innerHTML = `<h2>A temperatura de ${temperatura}°C, corresponde a...</h2>`;
    saida.innerHTML += `<p>${tempEmFah}°F (Fahrenheit)</p>`;
    saida.innerHTML += `<p>${tempEmKel}°K (Kelvin)</p>`;
});