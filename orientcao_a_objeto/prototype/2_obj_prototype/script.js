function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
};


Carro.prototype.rodas = 4;// desta maneira você atribui o valor de 4 a função criada
Carro.prototype.ligar = function () {
    console.log('o carro ligou')
}
let bmw = new Carro('BMW', 100000)

console.log(bmw);

console.log(bmw.rodas);

bmw.ligar();