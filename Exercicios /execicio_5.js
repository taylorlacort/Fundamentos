function maiorOuIgual(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
    }

    console.log(maiorOuIgual(2,1))