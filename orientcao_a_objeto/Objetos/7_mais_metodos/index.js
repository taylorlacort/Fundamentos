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
    }
}



pessoa.aniversario();
console.log(pessoa.idade)
pessoa.aniversario();
console.log(pessoa.idade)
pessoa.dizerIdade()
pessoa.aniversario()
pessoa.dizerIdade()

let calculadora = {
   

    somar: function(a,b){
        return a + b
    },
    subtracao(c){
       return this.somar - c
    }
}

console.log(calculadora.somar(3,4))
console.log(calculadora.subtracao(5))