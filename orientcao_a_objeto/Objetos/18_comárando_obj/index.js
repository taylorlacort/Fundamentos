function Ninja(nome, arma) {
    this.nome = nome
    this.arma = arma
}

const naruto = new Ninja('Naruto', 'Shuriken')
const rockLee = new Ninja('Rock Lee', 'punhos')
const cloneDoNaruto = new Ninja('Naruto', 'Shuriken')
const cloneVerdadeiroDoNaruto = naruto

console.log(naruto === rockLee)
console.log(naruto === cloneDoNaruto)
console.log(naruto.arma === cloneDoNaruto.arma)
console.log(naruto === cloneVerdadeiroDoNaruto)