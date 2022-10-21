let soma = 10 + 15
let subtracao = 12 - 3

let trabalho2 = true
let trabalho1 = false

console.log(soma > subtracao)
console.log(soma < subtracao)

let producao = trabalho1 || trabalho2

console.log("O taylor produz bem:", producao)

let producaoh = trabalho1 && trabalho2

console.log("o Harryson produz bem:", producaoh)

let vddatribuicao = 8 + 10 < 50 || false || 3 !== 5

let falseatribuicao = !(8 + 10 < 50 || false || 3 !== 5)

console.log(vddatribuicao)

console.log(falseatribuicao)/* É possivel observar nesta varialvel 
se ela não tivesse o operador logico de ! ela seria uma expressão verdadeira  este 
simbolo é conhecido como negação logica 
 */