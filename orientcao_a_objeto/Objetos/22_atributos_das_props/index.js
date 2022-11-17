
let pessoa = {
    nome: 'Matheus',
    getNome() {
        console.log(`Este é o nome do obj ${this.nome}`)
    }
};

let pessoa2 = {
    age: 22,
    nome: 'joao'
};

Object.assign(pessoa2, pessoa);

console.log(pessoa2);

pessoa2.getNome()
