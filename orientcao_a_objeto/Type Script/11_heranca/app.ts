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

class Ninja extends Humano {
    classe: string
    constructor(nome: string, idade: number, classe: string) {
        super(nome, idade);
        this.classe = classe;

    }
    atirarEstrlaNinja() {
        console.log('O ninja atirou a Shurken ')
    }
}

let taylor = new Ninja('Taylor', 24, 'Sannin')

console.log(taylor)

console.log(taylor.apresentarHumano())

taylor.atirarEstrlaNinja()