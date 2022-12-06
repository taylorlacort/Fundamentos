class Humano {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    falar() {
        console.log('O humanno falou')
    }
}
class Engenheiro extends Humano {
    constructor(nome, idade, espec) {
        super(nome, idade)
        this.profissao = 'Engenheiro'
        this.especializaco = espec;
    }
}

let taylor = new Engenheiro('Taylor', 24, 'Computacional')

console.log(taylor)

taylor.falar()