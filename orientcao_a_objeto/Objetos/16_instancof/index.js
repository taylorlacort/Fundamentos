function criarArvore(especie, temFruto) {
    return {
        especie: especie,
        temFruto: temFruto
    }
}

let laranjeira = criarArvore('laranjeira', true)



function Heroi(nome, classe) {
    this.nome = nome
    this.classe = classe
}

let jaspion = new Heroi('jaspion', 'robô')



console.log(laranjeira instanceof criarArvore)
console.log(laranjeira instanceof Object)

console.log(jaspion instanceof Heroi) // Aqui se apresenta verdadeiro pois ao criar 
// um objeto com New voce costroi um novo objeto 
