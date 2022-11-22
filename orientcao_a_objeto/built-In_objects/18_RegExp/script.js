// regex != regexp

let palavra = new RegExp(/at/)

console.log(palavra.test('Bola'));
console.log(palavra.test('Caminh]ão'));
console.log(palavra.test('matheus'));