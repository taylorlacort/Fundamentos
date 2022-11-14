function nomeMes(mes) {
    switch (mes) {
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro"
        case 3:
            return "Março"
        case 4:
            return "Abril"
        case 5:
            return "Maio"
        case 6:
            return "Junho"
        case 7:
            return "Julho"
        case 1:
            return "Agosto"
        case 1:
            return "Setembro"
        case 1:
            return "Outubro"
        case 1:
            return "Novembro"
        case 1:
            return "Dezembro"
    }
}


console.log(nomeMes(4))

function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--numero];
    }

    console.log(receberNomeDoMes(2))