let carro = {
    tipo: 'SUV',
    ligar() {
        console.log('carro Ligou')
    }
}



console.log(carro.tipo)

delete carro.tipo

console.log(carro.tipo)