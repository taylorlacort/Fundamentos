function verificarCarro(marca: string, aro?: number) {
    if (aro) {
        console.log('O carro é da marca' + marca + ', e possui o aro' + aro)
    } else {
        console.log('O carro é da marca')
    }
}