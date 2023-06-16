const button = document.querySelector('button');

button.addEventListener('click', () => {
    const saida = document.querySelector('div');
    const meses = [
        'Jan', 
        'Fev', 
        'Mar', 
        'Abr', 
        'Mai', 
        'Jun', 
        'Jul', 
        'Ago', 
        'Set', 
        'Out', 
        'Nov', 
        'Dez'
    ];
    const semanas = [
        'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'
    ];
    const data = {
        dia: new Date().getDate(),
        mes: new Date().getMonth(),
        ano: new Date().getFullYear(),
        diaSemana: new Date().getUTCDay(),
        hora: new Date().getHours(),
        minutos: new Date().getMinutes(),
        segunsdos: new Date().getSeconds()
    }

    saida.innerHTML = 
        `<p>Dia: <mark>${data.dia}</mark></p>`;
    saida.innerHTML += 
        `<p>Mês: <mark>${meses[data.mes]}</mark></p>`;
    saida.innerHTML += 
        `<p>Ano: <mark>${data.ano}</mark></p>`;
    saida.innerHTML += 
        `<p>Dia da Semana: <mark>${semanas[data.diaSemana]}</mark></p>`;
    saida.innerHTML += 
        `<p>Hora: <mark>${data.hora}</mark></p>`;
    saida.innerHTML += 
        `<p>Minutos: <mark>${data.minutos}</mark></p>`;
    saida.innerHTML += 
        `<p>Segundos: <mark>${data.segunsdos}</mark></p>`;
});