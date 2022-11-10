class Data {
    dia = 1
    mes = 1
    ano = 1970

    constructor(dia, mes, ano){
        this.dia= dia
        this.mes= mes
        this.ano= ano
    }
};


const d1 = new Data();

d1.dia = 24
d1.mes = 12
d1.ano = 2022
console.log(d1)

console.log(typeof Data);
console.log(typeof d1);

const d2 = new Data(31, 12, 2022);

console.log(d2)