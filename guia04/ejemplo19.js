//Interfaces
/** Una interface declara una serie de métodos y propiedades que deben ser implementados luego por una o más clases.
Las interfaces vienen a suplir la imposibilidad de herencia múltiple.
Por ejemplo podemos tener dos clases que representen un avión y un helicóptero. Luego plantear una interface con un método llamado volar.
 Las dos clases pueden implementar dicha interface y codificar el método volar (los algoritmos seguramente*/
var PuntoPlano = /** @class */ (function () {
    function PuntoPlano(x, y) {
        this.x = x;
        this.y = y;
    }
    PuntoPlano.prototype.imprimir = function () {
        console.log("Punto en el plano: (" + this.x + "," + this.y + ")");
    };
    return PuntoPlano;
}());
var PuntoEspacio = /** @class */ (function () {
    function PuntoEspacio(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    PuntoEspacio.prototype.imprimir = function () {
        console.log("Punto en el plano: (" + this.x + "," + this.y + "," + this.z + ")");
    };
    return PuntoEspacio;
}());
var puntoPlano1;
puntoPlano1 = new PuntoPlano(10, 4);
puntoPlano1.imprimir();
var puntoEspacio1;
puntoEspacio1 = new PuntoEspacio(20, 50, 60);
puntoEspacio1.imprimir();
