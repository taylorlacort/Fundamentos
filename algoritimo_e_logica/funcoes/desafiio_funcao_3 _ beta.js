const nota1 = 7.8;    //
const nota2 = 3.1;    //    Notas do aluno.
const nota3 = 6.7;    //

function minimo(n1, n2) {
    if (n1 <= n2) {
        return n1;
    }
    else {
        return n2;
    }
}


function calcMedia (n1, n2, n3)
{
const menorNota = minimo(n1, minimo(n2, n3))

if (menorNota === n1) {
    return (n2 + n3) / 2

}
else if (menorNota === n2) {
    return (n1 + n3) / 2
}

else if (menorNota === n3) {
    return (n2 + n1) / 2
}
}

function notaFinal(nota) {
    const mediaFinal = calcMedia(nota1, nota2, nota3);
    if (mediaFinal < 0 || mediaFinal > 10) {
        return null

    } else if (mediaFinal >= 7) {
        return `Sua média foi ${mediaFinal}, você esta aprovado `

    } else if (mediaFinal < 7 || mediaFinal > 4) {
        return `Sua média foi ${mediaFinal}, você esta de recuperação `

    } else if (mediaFinal <= 4) {
        return `Sua média foi ${mediaFinal}, você esta foi reprovado  `

    }
}

console.log(notaFinal())

