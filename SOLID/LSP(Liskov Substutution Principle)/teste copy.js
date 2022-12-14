


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

