function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
};


Carro.prototype.cor = 'preto';

let fusca = new Carro('VW', 10000)

console.log(fusca.cor);

fusca.cor = 'Rosa'

console.log(fusca.cor)