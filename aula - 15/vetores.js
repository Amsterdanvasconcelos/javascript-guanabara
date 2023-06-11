const arr2 = [3, 8, 0, 3, 10, 6];

/* Mostrando cada elemento da array na tela por meio de um loop */
let n = 0;
do {
    // console.log(arr2[n]);
    n++;
} while (n <= arr2.length - 1);

/* Forma mais consisa loop */

for (let n in arr2) {
    // console.log(arr2[n]);
}

/* Tendo o retorno do index de um conteúdo específico */
/* Caso o conteúdo não exista, ele retorna -1 */
/* Caso exista mais de um conteúdo igual, ele retorna o index do primeiro */
console.log(arr2.indexOf(3));