const horas = new Date().getHours();
console.log(horas);

if (horas > 4 && horas < 13) {
    console.log('Bom-dia!');
} else if (horas >= 13 && horas < 18) {
    console.log('Boa-tarde!');
} else {
    console.log('Boa-noite!');
}