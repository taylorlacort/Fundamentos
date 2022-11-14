function Ninja(nome, arma) {
    this.nome = nome;
    this.arma = arma;
    this.atirarArma = function () {
        console.log(`Atirou  ${this.arma}`)
    }
}

let ninja1 = new Ninja('Klebert', 'Pão puma');

console.log(ninja1.nome);

ninja1.atirarArma();

let ninja2 = new Ninja('Montiak', 'Bacon')

console.log(ninja2.nome)

ninja2.atirarArma()