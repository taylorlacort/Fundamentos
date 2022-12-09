interface config {
    marca: string,
    aro?: number,
    tetoSolar: boolean,
    cor?: string,
}

function criarCarro(config: config): { marca: string, aro: number, tetoSolar: boolean, cor: string } {

    let carro = { marca: 'Defaut', aro: 16, tetoSolar: false, cor: 'preto' }


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



let bmw = { marca: 'Bmw', tetoSolar: true }


console.log(bmw)

let ferrari = { marca: 10, aro: 20, tetoSolar: false, cor: 'Vermelha' }


console.log(ferrari)