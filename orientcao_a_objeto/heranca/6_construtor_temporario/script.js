function Veiculo() { }

Veiculo.prototype.carenagem = 'aço';
Veiculo.prototype.ligar = function () {
    console.log('O veiculo ligou')
}


function Trem(tipo) {
    this.tipo = tipo;
}

Trem.prototype.vagoes = 50;

function Carro() { }
Carro.prototype.pneus = 4;


Trem.prototype = Veiculo.prototype;


//Construtor temporario 
let F = function () { };
F.prototype = Veiculo.prototype
Carro.prototype = new F

let trembala = new Trem('Trem bala ');
let trem = new Trem('Trem ');
let cadilac = new Carro

Carro.prototype.ligar = function () {
    console.log('O carro ligou');
}

trem.ligar();
trembala.ligar();
cadilac.ligar();

console.log(trem.carenagem)