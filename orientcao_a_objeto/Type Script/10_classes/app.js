var Humano = /** @class */ (function () {
    function Humano(nome, idade) {
        this.apresentarHumano = function () {
            return "O nome deste humano \u00E9 ".concat(this.nome, " e ele tem ").concat(this.idade, " anos");
        };
        this.nome = nome;
        this.idade = idade;
    }
    return Humano;
}());
var taylor = new Humano('Taylor', 24);
console.log(taylor);
console.log(taylor.apresentarHumano());
