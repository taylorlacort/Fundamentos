function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
};


Carro.prototype = { // desta maneira criamos um objeto vazio e adicionamos propriedades e motodos
    rodas: 4,

    ligar() {
        console.log('o carro ligou')
    }
}

let bmw = new Carro('BMW', 100000)

console.log(bmw);

console.log(bmw.rodas);

bmw.ligar();


let ferrari = new Carro('Ferarri', 200000)

Carro.prototype.tetoSolar = true;

Carro.prototype.abrirTetoSolar = function () {
    console.log('teto solar abriu')
}

console.log(bmw.tetoSolar)
console.log(ferrari.tetoSolar)

ferrari.abrirTetoSolar()

//Mesmo depois de estabelercermos propiedades e metodos é possivel adicionar por meio do
//Prototype mas elas sãoadcionads a todos 

