
//Função construtota - > ela constroi um objeto 

function Data(dia = 1, mes = 1, ano = 2021) {
    this.dia = dia
    this.mes = mes
    this.ano = ano //podemos chamar uma função dentro da própria função construtora 

    this.exibir = function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}; //observe no console as maneiras que apareceram as datas dentro da função e como objeto 



const d1 = new Data();
d1.ano = 1970;
const d2 = new Data(24, 12, 2022);
const d3 = new Data(31, 12, 2021)// cria um objeto dentro da função 

console.log(typeof d1)

console.log(d1.exibir())
console.log(d2.exibir())

console.log(d3.exibir())

console.log(d1)
console.log(d2)
console.log(d3)





/*Função construtora(classe): representa um molde pois define os atributos, a quantidade, como são os atributos e qual 
o seu comportamento, a palavra New expecifica esse molde esse novo objeto dentro da função construtora 


objeto:*/ 


