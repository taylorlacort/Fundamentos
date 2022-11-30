function abc (){
    console.log('Teste')
}

abc();

console.log(abc.prototype)

console.log(typeof abc.prototype)

abc.prototype.teste = 1;

console.log(abc.prototype)