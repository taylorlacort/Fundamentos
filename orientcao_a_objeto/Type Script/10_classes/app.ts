class Humano {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentarHumano = function () {
        return `O nome deste humano é ${this.nome} e ele tem ${this.idade} anos`
    }
}

let taylor = new Humano('Taylor', 24)

console.log(taylor)

console.log(taylor.apresentarHumano())

