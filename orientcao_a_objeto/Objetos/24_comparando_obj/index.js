let teste = {
    a: 1,
}
let teste2 = {
    a: 1,
}
console.log(Object.is(teste, teste2));

console.log(Object.is(NaN, NaN));
console.log(NaN === NaN);

console.log(Object.is(+0, -0));
console.log(+0 === -0);

teste3 = teste

console.log(Object.is(teste, teste3))// Desta maneira da certo pois um referencia o outro não 
//è apenas uma cópia.