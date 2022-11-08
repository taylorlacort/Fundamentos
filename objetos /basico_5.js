const cliente = {
    codigo: 16532,
    nome: 'Ana',
    endereco: {
        vip: true,
        rua: 'Rua ABC',
        numero: 123,
        complemento: 'Apto 55 Bloco J',
        pontosRef: [
            'Hospital X',
            'Shopping Y',
            'Padria Teruo'
        ]
    },
    nomeFilhos: ['Tompson', 'Naubert', 'Mantinoide']
};

console.log(cliente.nomeFilhos[1])
console.log(cliente.endereco.numero)
console.log(cliente.endereco)

console.log(typeof cliente.endereco.vip)