const a = 3076;
const b = 2920;
const operacao = '*'

const resultado =
  operacao === '+' ? a + b :
    operacao === '-' ? a - b :
      operacao === '*' ? a * b : a / b;

console.log(resultado)
