const dia = new Date().getDay();
/* 
    Domingo - 0;
    Segunda - 1;
    Terça - 2;
    Quarta - 3;
    Quinta - 4;
    Sexta - 5;
    Sábado - 6;
*/
switch (dia) {
    case 0:
        console.log('Hoje é Domingo-feira!');
        break;
    case 1:
        console.log('Hoje é Segunda-feira!');
        break;
    case 2:
        console.log('Hoje é Terça-feira!');
        break;
    case 3:
        console.log('Hoje é Quarta-feira!');
        break;
    case 4:
        console.log('Hoje é Quinta-feira!');
        break;
    case 5:
        console.log('Hoje é Sexta-feira!');
        break;
    case 6:
        console.log('Hoje é Sábado-feira!');
        break;
    default:
        console.log('ERRO!');
}


