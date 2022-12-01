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

Trem.prototype = new Veiculo(); // Podemos atribuir os metodos e as propriedas do veiculo
// para a classe trem isso usando prototype chain
Carro.prototype = new Veiculo();


let trembala = new Trem('Trem bala ');
let cadilac = new Carro


console.log(trembala.tipo);

trembala.ligar();
cadilac.ligar();