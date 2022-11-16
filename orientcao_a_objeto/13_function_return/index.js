function criarCarro(modelo, portas, aro, tetoSolar) {
    return {
        modeloDoCarros: modelo,
        portas: portas,
        aro: aro,
        tetoSolar: tetoSolar,
        ligarcarro() {
            console.log('Ligou')
        },
        temTetoSolar() {
            if (this.tetoSolar == true) {
                console.log('Tem teto solar')

            } else {
                (console.log('Não tem teto solar'))
            }
        }

    };
}


let ferrari = criarCarro('Ferrari', 2, 20, false)

ferrari.temTetoSolar()
