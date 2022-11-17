let pessoa = {
    nome: 'Matheus',
    idade: 29,
    falar: function () {
        console.log('Meu nome é mathues')
    },
    aniversario() {
        this.idade += 1;
    },
    dizerIdade() {
        console.log(`A minha idade é ${this.idade}`)
    },
    PodeDirigir() {
        if (this.idade >= 18) {
            console.log('Pode dirigir ')

        } else { 'Ainda não pode dirigir' }
    },
    caracteristicas: {
        cnh: true,
        carteira: ['dinheiro,', 'documento', 'moeda']
    }

}

console.log(pessoa.caracteristicas);
console.log(pessoa.caracteristicas.carteira[2])
