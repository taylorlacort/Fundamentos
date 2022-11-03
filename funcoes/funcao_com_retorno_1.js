function sempreRetornaUm() {
    return 1;
}

let valor = sempreRetornaUm() + 999;

console.log(valor)

function textoOuNumero(retornaTexto) {
    return retornaTexto ? "sou um texto" : 123; //FOI UTILIZADO O OPERADOR TERNARIO, CASO VERDADEIRO APRESENTA TEXTO
    //SENDO FALSO ARPESENTA NUMERO 

}

function numeroOuTexto(retornoNumero) {
    if (retornoNumero) {
        return 123;
    } else {
        return 'texto'
    }
    /*Podemos observar que os dois blocos de código 
    executam a mesma função]
    mas cada um de uma maneira diferente*/
}

console.log(textoOuNumero(true))
console.log(textoOuNumero(false))

console.log(numeroOuTexto(true))
console.log(numeroOuTexto(false))