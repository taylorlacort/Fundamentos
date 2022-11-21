//helpers

function compareOBJS(obj1, obj2) {
    if (obj1 instanceof obj2) {//instanceog compara os objetos e suas instancias 
        console.log(`O objeto ${obj1.nome} é uma instância de ${obj2.name}`)
    } else { console.log(`O objeto ${obj1.nome} não é uma instância de  ${obj2.name}`) }// este name se atribui ao nome do 
    //do objeto que definimos.
}

//OBJS
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


compareOBJS(naruto,Ninja)