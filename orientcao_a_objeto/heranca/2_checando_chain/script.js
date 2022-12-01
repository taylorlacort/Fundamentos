function Veiculo() {
    this.carenagem = 'aço';
    this.ligar = function () {
        console.log('O veiculo ligou')
    }

}

function Trem(tipo) {
    this.tipo = tipo;
    this.vagoes = 50;
}

function Carro() {
    this.pneus = 4;
}

Trem.prototype = new Veiculo();
Carro.prototype = new Veiculo();


let trembala = new Trem('Trem bala ');
let cadilac = new Carro

console.log(trembala instanceof Trem);
console.log(cadilac instanceof Carro);

console.log(trembala instanceof Veiculo);
console.log(cadilac instanceof Veiculo);

console.log(trembala instanceof Object);
console.log(cadilac instanceof Object);

console.log(trembala instanceof Carro);
console.log(cadilac instanceof Trem);//False pois em veiculo há um bifurcção


//Tudo é herdade dos objetos como criamos as classes baseada nos veiculos eles são herdeiros


