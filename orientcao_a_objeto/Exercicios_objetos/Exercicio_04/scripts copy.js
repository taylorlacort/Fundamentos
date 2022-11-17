function Ninja(nome, qtd) {
    this.nome = nome
    this.estoqueshuriken = qtd
    this.atirarShuriken = function () {
        if (this.estoqueshuriken > 0) {
            console.log('O ninja atirou a shuriken')
            this.estoqueshuriken -= 1

        } else {
            console.log('Naruto Não possui mais Shiriken')
        }


    }

};

let naruto = new Ninja('Naruto', 3);


console.log(naruto.estoqueshuriken)
naruto.atirarShuriken();
console.log(naruto.estoqueshuriken)
naruto.atirarShuriken();
console.log(naruto.estoqueshuriken)
naruto.atirarShuriken()
console.log(naruto.estoqueshuriken)
naruto.atirarShuriken()

// Esta maneira foi a que o professor fez 
//onde cada repetição da função retira uma shuriken do estoque