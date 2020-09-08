var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Operacion = /** @class */ (function () {
    function Operacion(valor1, valor2, resultado) {
        if (resultado === void 0) { resultado = 0; }
        this.valor1 = valor1;
        this.valor2 = valor2;
        this.resultado = resultado;
    }
    Operacion.prototype.imprimir = function () {
        console.log("Resultado: " + this.resultado);
    };
    return Operacion;
}());
var Suma = /** @class */ (function (_super) {
    __extends(Suma, _super);
    function Suma(v1, v2) {
        return _super.call(this, v1, v2) || this;
    }
    Suma.prototype.operar = function () {
        this.resultado = this.valor1 + this.valor2;
    };
    return Suma;
}(Operacion));
var Resta = /** @class */ (function (_super) {
    __extends(Resta, _super);
    function Resta(v1, v2) {
        return _super.call(this, v1, v2) || this;
    }
    Resta.prototype.operar = function () {
        this.resultado = this.valor1 - this.valor2;
    };
    return Resta;
}(Operacion));
var suma1;
suma1 = new Suma(10, 4);
suma1.operar();
suma1.imprimir();
var resta1;
resta1 = new Resta(10, 4);
resta1.operar();
resta1.imprimir();
