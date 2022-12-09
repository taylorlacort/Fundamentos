function verificarCarro(marca, aro) {
    if (aro) {
        console.log('O carro é da marca ' + marca + ', e possui o aro ' + aro);
    }
    else {
        console.log('O carro é da marca ' + marca);
    }
}


verificarCarro('bwn', 20)

verificarCarro('Honda')