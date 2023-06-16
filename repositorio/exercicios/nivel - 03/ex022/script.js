const button = document.querySelector('button');

button.addEventListener('click', () => {
    const saida = document.querySelector('[data-saida="saida"]');
    
    saida.innerHTML = '';
    for (let pass = 1 ; pass <= 10 ; pass++) {

        if (pass % 2 == 0) {
            if (pass < 10) {
                saida.innerHTML += 
                    ` <mark style="padding: 0 3px;">${pass}</mark>,`;
            } else {
                saida.innerHTML += 
                    ` <mark style="padding: 0 3px;">${pass}</mark>`;
            }
        } else {
            saida.innerHTML += ` ${pass},`;
        }
    }
});