const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

numeros.splice(1, 1); /* Este comando exclui valores da array 
o primeiro numero colocado no splice mostra o indece depois quantos valores serão excluidos apartir deste indece*/
console.log( numeros);

numeros.splice(1, 2);
console.log(numeros);

numeros.pop();// Remove o ultimo elemento do indece no caso da array 
console.log(numeros.pop());// Neste caso do console, ele mostra qual elemento esta sendo removido
console.log(numeros);

 