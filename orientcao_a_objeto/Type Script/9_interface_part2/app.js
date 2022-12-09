function criarCarro(config) {
    var carro = { marca: 'Defaut', aro: 16, tetoSolar: false, cor: 'preto' };
    if (config.marca) {
        carro.marca = config.marca;
    }
    if (config.aro) {
        carro.aro = config.aro;
    }
    if (config.tetoSolar) {
        carro.tetoSolar = config.tetoSolar;
    }
    if (config.cor) {
        carro.cor = config.cor;
    }
    return carro;
}
var bmw = { marca: 'Bmw', tetoSolar: true };
console.log(bmw);
var ferrari = { marca: 10, aro: 20, tetoSolar: false, cor: 'Vermelha' };
console.log(ferrari);
