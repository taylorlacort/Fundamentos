function executar(fn, n1, n2) {
    if (typeof fn === "function") {
        console.log(fn(n1, n2)); // <--- Parte Central da aula 
    }
}

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}
executar(somar, 10, 20)
executar(subtrair, 364, 215)
executar(multiplicar, 12, 12)