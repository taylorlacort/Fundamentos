let temDinheiro = true;
let estaEnsolarado = true;
let carroEstaNaGaragem = false;

let resultadoE = " #(AND)1 vai pro shopping?   "

resultadoE += temDinheiro && estaEnsolarado /* Neste contexto apenas com os dois operadores 
sendo verdadeiros o resultado é true (se usar apenas um & a resposta sera em valor binario) */

console.log(resultadoE)

let resultadoOu = " #(OR)2 vai pro shopping?   "
resultadoOu += estaEnsolarado || carroEstaNaGaragem /* Com apenas um dos operadores sendo 
verdadeiro o resultado é true (Se usar apenas um | a respota sera em valor binário) */

console.log(resultadoOu)

console.log(true !== false)

console.log("Não verdadeiro: " + !true)
console.log("Não falso: " + !false)