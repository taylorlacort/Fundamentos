function retornarUmafuncao() {
    return function () {
        return function () {
            return "Boa tarde!!"
        }
    }

}


console.log(retornarUmafuncao)
console.log(retornarUmafuncao())
console.log(retornarUmafuncao()())
console.log(retornarUmafuncao()()())



