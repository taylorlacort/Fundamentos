let a = true;
let b = new Boolean(true);

console.log(a)
console.log(b)
console.log(b.valueOf())//tem que ser utilizado o value of para retirar o valor de boolean

console.log(a instanceof Boolean); //boolean != Boolean
console.log(b instanceof Boolean)