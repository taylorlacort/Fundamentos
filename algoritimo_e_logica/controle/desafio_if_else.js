const a = 7
const b = 19
const operacao = "+"

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
} else { console.log("Operador digitado não corresponde ")}

console.log(resultado)