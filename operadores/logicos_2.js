const t1 = true;
const t2 = false;

let comprarTV50 = t1 && t2 // AND 
console.log("vamos comprar a TV de 50'? ", comprarTV50)

let comprarTV32 = t1 !== t2 // XOR
console.log("vamos comprar a TV de 32'?", comprarTV32)

let TomarSorvete = t1 || t2

console.log("vamos comprar sorvete'?", TomarSorvete) // OR 

let FicarEmCasa = !TomarSorvete

console.log("vamos ficar em casa? ", FicarEmCasa) // NOT 