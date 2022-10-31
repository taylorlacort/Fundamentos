//#1: Funcão COM parâmetro e COM retorno
function somar(a, b) {
    return a + b
}
let resultado = somar(89, 99)
console.log(resultado)
console.log(somar(50, 22))

//#2: Funcão COM parâmetro e SEM retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b)
}
exibirMultiplicacao(12, 52);
exibirMultiplicacao(7, 9)

//#3: Funcão SEM parâmetro e COM retorno
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual())

//#4: Funcão SEM parâmetro e SEM retorno
function exibirHoraAtual() {
    console.log(new Date().getHours());
}

exibirHoraAtual();