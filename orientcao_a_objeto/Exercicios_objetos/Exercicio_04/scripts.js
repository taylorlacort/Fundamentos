function Ninja(nome) {
    this.nome = nome
    this.atirarShuriken = function () {
        console.log('O ninja atirou a shuriken')
    }

};

let naruto = new Ninja('Naruto', 'Shuriken');





for (let i = 1; i < 5; i++){
    naruto.atirarShuriken()
}