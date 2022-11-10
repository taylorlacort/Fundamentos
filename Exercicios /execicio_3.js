function salario(salarioBruto, horas) {

    const calcSalario = salarioBruto * horas
    const salarioLiquido = (calcSalario * 70) / 100

    return `Seu salário é igual  ${salarioLiquido}`
}


console.log(salario(180, 60))