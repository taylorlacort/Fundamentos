function Ninja(nome) {
    this.nome = nome
    this.atirarShuriken = function () {
        console.log('O ninja atirou a shuriken')
    }

};

let naruto = new Ninja('Naruto', 'Shuriken');

console.log(naruto);