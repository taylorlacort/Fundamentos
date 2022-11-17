function Ninja(nome, qtd) {
    this.nome = nome
    this.estoqueshuriken = qtd
    this.atirarShuriken = function (Inimigo) {
        if (this.estoqueshuriken > 0) {
            console.log('O ninja atirou a shuriken')
            this.estoqueshuriken -= 1
            Inimigo.vivo = false

        } else {
            console.log('Naruto Não possui mais Shiriken')
        }


    }

};

function Inimigo(nome) {
    this.nome = nome
    this.vivo = true
}

let naruto = new Ninja('Naruto', 3);
let orochimaru = new Inimigo('orochimaru')



let morto = (Inimigo.vivo = false)

console.log(naruto, orochimaru)

naruto.atirarShuriken(orochimaru)

console.log(orochimaru.vivo)