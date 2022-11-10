const d1 = {
    dia: 7,
    mes: 4,
    ano: 2019,

    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

const d2 = {
    dia: 15,
    mes: 12,
    ano: 1996,

    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

const d3 = {
    dia: 20,
    mes: 6,
    ano: 2023,

    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};



console.log(d1.exibir())
console.log(d2.exibir())
console.log(d3.exibir())