function extend(Filho, Pai) {

    let F = function () { };
    F.prototype = Pai.prototype
    Filho.prototype = new F
}

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



extend(Trem, Veiculo);
extend(Carro, Veiculo);




let trembala = new Trem('Trem bala ');
let trem = new Trem('Trem ');
let cadilac = new Carro

Carro.prototype.ligar = function () {
    console.log('O carro ligou');
}

Trem.prototype.ligar = function () {
console.log(' PIIIIIIIIIUUUUUUUUUUIIIIIIIII');
}


trem.ligar();
trembala.ligar();
cadilac.ligar();

console.log(trem.carenagem)