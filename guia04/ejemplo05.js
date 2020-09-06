//propiedades estaticas
//pertenecen a la clase y no a las instancias de la clase.
var Dado = /** @class */ (function () {
    function Dado() {
    }
    Dado.prototype.tirar = function () {
        this.generar();
    };
    Dado.prototype.generar = function () {
        this.valor = Math.floor(Math.random() * 6) + 1;
        Dado.tiradas++;
    };
    Dado.prototype.imprimir = function () {
        console.log("Salio el valor " + this.valor);
    };
    Dado.tiradas = 0;
    return Dado;
}());
var dado1 = new Dado();
dado1.tirar();
dado1.imprimir();
dado1.tirar();
dado1.imprimir();
var dado2 = new Dado();
dado2.tirar();
dado2.imprimir();
console.log("Cantidad de tiradas de dados:" + Dado.tiradas); //2
