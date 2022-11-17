let pessoa = {
    nome: 'Taylor',
    idade: 24,
    programador: true,
    extra: ['Tocar', 'treinar', 'jogar VideoGame'],
    retonaNome() {
        console.log('Meu nome é ' + this.nome)
    }
};


pessoa.retonaNome()
