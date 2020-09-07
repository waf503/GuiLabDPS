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
//herencia la herencia es otra caracteristica fundamental de la proceamacion orientada a objetos y TS lo implementa
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.imprimir = function () {
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + this.edad);
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, sueldo) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.imprimir = function () {
        _super.prototype.imprimir.call(this);
        console.log("Sueldo: " + this.sueldo);
    };
    Empleado.prototype.pagaImpuesto = function () {
        if (this.sueldo > 5000) {
            console.log(this.nombre + " debe de pagar impuestos");
        }
        else {
            console.log(this.nombre + " no debe pagar impuestos");
        }
    };
    return Empleado;
}(Persona));
var persona1 = new Persona('Juan', 44);
persona1.imprimir();
var empleado1 = new Empleado('Ana', 22, 7000);
var empleado2 = new Empleado('Wilmer', 20, 2000);
empleado1.imprimir();
empleado2.imprimir();
empleado1.pagaImpuesto();
empleado2.pagaImpuesto();
