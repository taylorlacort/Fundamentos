
console.log(typeof console);


console.log(typeof console.log);/* Ao passar o mouse em cima fa palavra,
 ele me apresenta como metodo. Que é uma função relacionada a determinado objeto 
*/
const numeros = [1, 2, 3];

console.log(typeof numeros)

/* Ao observar tanto a palavra CONSOLE  como as ARRAYS  são objetos, mas o que seria um objeto:
Os objetos servem para armazenar funções ou dados.
Assim como console.log o *CONSOLE* é um objeto e o *LOG* é a função do objeto mas para o java ele define como metodo 
*/
numeros.push(4); //PUSH atribui valores para a array sem definir a posição 
numeros.push(5);
numeros.push(10);

console.log(numeros);
console.log(numeros.length);