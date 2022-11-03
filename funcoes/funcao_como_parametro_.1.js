function executar(param) {
    if (typeof param === "function") {
        console.log(param()); // <--- Parte Central da aula 
    }
}

function bomDia() {
    return 'bom dia';
}

executar(3)
executar(bomDia); // <--- Parte Central da aula 

const x = bomDia;
const y = bomDia();

console.log(x())
console.log(y)