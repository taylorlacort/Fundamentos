var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Ninja = /** @class */ (function (_super) {
    __extends(Ninja, _super);
    function Ninja(nome, idade, classe) {
        var _this = _super.call(this, nome, idade) || this;
        _this.classe = classe;
        return _this;
    }
    Ninja.prototype.atirarEstrlaNinja = function () {
        console.log('O ninja atirou a Shurken ');
    };
    return Ninja;
}(Humano));
var taylor = new Ninja('Taylor', 24, 'Sannin');
console.log(taylor);
console.log(taylor.apresentarHumano());
taylor.atirarEstrlaNinja();
