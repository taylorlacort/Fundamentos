let rodas = 4;
let portas = 4;
let aro = 20
let tetoSolar = true;

let carro = {
    rodas,
    portas,
    aro,
    tetoSolar,
    bandoDeCouro: true,
    ligar() {
        console.log('O carro ligou')
    },
    desligar() {
        console.log('O carro desligou')

    }
};

console.log(carro);
carro.ligar();
carro.desligar();
