var Calculadora = /** @class */ (function () {
    function Calculadora(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    Calculadora.prototype.operacionesBasicas = function () {
        var suma;
        var resta;
        var multi;
        var div;
        suma = this.numero1 + this.numero2;
        resta = this.numero1 - this.numero2;
        multi = this.numero1 * this.numero2;
        div = Math.round((this.numero1 / this.numero2) * 100) / 100;
        console.log("\nOPERACIONES BASICAS\n" +
            this.numero1 + " + " + this.numero2 + " = " + suma + "\n" +
            this.numero1 + " - " + this.numero2 + " = " + resta + "\n" +
            this.numero1 + " X " + this.numero2 + " = " + multi + "\n" +
            this.numero1 + " / " + this.numero2 + " = " + div + "\n");
    };
    return Calculadora;
}());
//Instanciando Objeto de Calculadora
var calculadora01 = new Calculadora(3, 2);
calculadora01.operacionesBasicas();
