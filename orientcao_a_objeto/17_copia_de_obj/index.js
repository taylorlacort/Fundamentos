let obj = {
    numero: 1,
}

console.log(obj.numero)

let copia = obj

console.log(copia.numero)

console.log(obj.numero)

copia.numero = 5

console.log(obj)
console.log(copia)

//Desta maneira acima não copiamos o objeto apenas criamos uma referencia com mais um nome 