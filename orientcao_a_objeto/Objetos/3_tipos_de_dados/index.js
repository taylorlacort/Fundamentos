let maquina = {
    material: "Aço Inox",
    equipamentos: ["Motor", "Freio", "Esteira", "Cilindro"],
    vaiMontada: true,
    numeroDeMotores: 1,
};

console.log(maquina)
console.log(maquina.material)
console.log(maquina.equipamentos)
console.log(maquina.equipamentos[2])

if (maquina.vaiMontada === false) {
    console.log("Comprador precisa montar")
} else(console.log("Não é necessário se preocupar com a montagem"))