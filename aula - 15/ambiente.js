const num = [1, 2, 3];

/* Posso substituir um valor da array da seguinte maneira. */
num[1] = 5;

/* 
Posso adicionar um determinado valor em qualquer lugar da array.
E se o ínidice não existir, ele é criado.
*/
num[4] = 5;

/* Posso add um novo valor sempre no final da array. */
num.push(4);

/* Posso saber quantos a quantidade de elementos de uma array. */
num.length;

/* Posso ordenar os elementos de uma array. */
/* Dependendo do tipo de ordenação, modificamos a função dentro do método. */
const arr2 = [3, 8, 0, 3, 10, 6];

arr2.sort((a, b) => a - b);





