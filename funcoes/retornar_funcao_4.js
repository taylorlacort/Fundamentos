function porcentagem68(a) {
    return function (b) {
        return a * b
    }
}

const valorPorcentagem = porcentagem68(0.95)

console.log(valorPorcentagem(166))