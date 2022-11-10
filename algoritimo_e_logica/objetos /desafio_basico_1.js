const namoro = {
    dia: 7,
    mes: 4,
    ano: 2019,

    exibir : function (){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

console.log(namoro.exibir())