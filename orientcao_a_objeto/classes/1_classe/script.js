class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

    }
}


console.log(typeof Humano);

let matheus = new Humano('mathues', 36)

console.log(matheus.idade)