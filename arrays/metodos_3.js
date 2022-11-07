const numeros = [10, 20, 30, 44];

numeros.forEach(function () {
    console.log("Dentro do forEache")
})
//Acima podemos observar que a string é executada a mesma quantidade de indices que existem dentro da array 


//for (let i = 0; i < numeros.length; i++) {
//    console.log(numeros[i])

//}

//for (let n of numeros) {
//    console.log(n);
//}

numeros.forEach(function (elemento, indice, array) {
    console.log(elemento, indice, array)
}) // Acima podemos observar que idependete do nome que damos os tres primeiros parametros da funcção são os elementos
// E depois os indeces e depois o array completo 