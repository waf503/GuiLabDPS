var Dado = /** @class */ (function () {
    function Dado() {
    }
    //metodo tirar
    Dado.prototype.tirar = function () {
        this.generar();
    };
    //metodo generar()
    Dado.prototype.generar = function () {
        this.valor = Math.floor(Math.random() * 6) + 1;
    };
    //metodo imprimir
    Dado.prototype.imprimir = function () {
        console.log("Salio el valor " + this.valor);
    };
    return Dado;
}());
var dado1 = new Dado();
dado1.tirar();
dado1.imprimir();
