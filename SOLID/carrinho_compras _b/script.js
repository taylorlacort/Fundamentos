class CarrinhoCompra {

    constructor() {

        //atributos

        this.itens = []
        this.status = 'aberto'
        this.valorTotal = 0
    }

    //metodos

}


let carrinho1 = new CarrinhoCompra()


function exibirtens() {
    return carrinho1.itens
}


function adicionarItens(item, valorTotal) {
    return carrinho1.itens.push(item, valorTotal)
}

function exibirStatus() {
    return carrinho1.status
}
console.log(exibirtens())



adicionarItens('Biciceta', 1100)
adicionarItens('PS5', 5000)
adicionarItens('PCgamer', 10000)



console.log(carrinho1.itens)
console.log(exibirStatus())






// Primeiro principio de responsabilidade unica não se aplica a nossa classe criada por conta dos metodos atribuidos e das
//responsabilidades, sigla SRP ou single responsibility