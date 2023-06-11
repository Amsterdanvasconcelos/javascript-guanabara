const mostrarHora = document.querySelector('#hora');
const img = document.querySelector('img');
const agora = new Date();
const hora = agora.getHours();
const minuto = agora.getMinutes();

mostrarHora.innerText = 
    `Agora são ${hora < 10 ? '0'+hora : hora}:${minuto < 10 ? '0'+minuto : minuto}`;

if (hora >= 5 && hora < 13) {
    img.
    img.setAttribute('src', 'imgs/morning.png');
    document.body.style.backgroundColor = '#4fb0f5';
} else if (hora >= 13 && hora < 18) {
    img.setAttribute('src', 'imgs/afternoon.png');
    document.body.style.backgroundColor = '#fe9a5c';
} else {
    img.setAttribute('src', 'imgs/night.png');
    document.body.style.backgroundColor = '#0b1618';
}