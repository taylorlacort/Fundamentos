const numeros = [1, 2, 3, 4, 5]


numeros[0] = 100; // Neste caso pegamos a primeira posição e mudamos o valor atribuido no inicio 
numeros.push(6); //Push adiciona um valor dentro da array sendo que o valor fica na proxima posição 




const numeros2 = numeros.concat(7, 8, 9)/* Neste os valores adicionados criam uma nova array 
por isso criamos uma nova constatnte para somar os valores do concat junto com a antiga arrai numeros 
observe em console.log o valor atribuido 
*/

console.log(numeros);
console.log(numeros.join(',')); //pegou todos os valores atribuidos com virgula e juntou em uma string 
console.log(numeros.join(' - '))
console.log(numeros2)
console.log(numeros.includes(10))// verifica se o valor esta incluso na Array
console.log(numeros.includes(6))
numeros.push(4)
console.log(numeros.indexOf(4, 4))// Mostra o indece do valor 4 por ter dois valores ele mostra o valor do segundo 4
console.log(numeros2.indexOf(6))
console.log(numeros)