//declaramos la clase
var Persona = /** @class */ (function () {
    //Definiendo constructor
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    //funcion imprimir
    Persona.prototype.imprimir = function () {
        console.log("Nombre: " + this.nombre + " y edad:" + this.edad);
    };
    return Persona;
}());
//instanciando
var persona1;
persona1 = new Persona('Juan', 45);
persona1.imprimir();
