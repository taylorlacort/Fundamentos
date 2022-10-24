const a = 7
const b = 19
const operacao = ""

let resultado;

if (operacao === '+')
    resultado = a + b;
else if (operacao === '-') {
    resultado = a - b
} else if (operacao === '*') {
    resultado = a * b
} else if (operacao === '/') {
    resultado = a / b
} else if (operacao === '%'){
    resultado = a % b
} else {"Operador digitado é indevido "}

console.log(resultado)