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


//copiando só o prototype, em vez de instanciar uma classe
Trem.prototype = Veiculo.prototype;
Carro.prototype = Veiculo.prototype;


let trembala = new Trem('Trem bala ');
let trem = new Trem('Trem ');
let cadilac = new Carro


trem.ligar();
trembala.ligar();
cadilac.ligar();

console.log(trem.carenagem)