let equipamentosDoCarro = {
    preco: preco,
    calota: true,
    cor: cor,
    aro: aro,
};


function Carro(marca) {
    this.marca = marca;

}

let fusca = new Carro('VW')

console.log(fusca.preco)

console.log(equipamentosDoCarro.isPrototypeof(fusca))