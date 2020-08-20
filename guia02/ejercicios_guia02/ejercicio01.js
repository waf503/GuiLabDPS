//Clase rombo
var Rombo = /** @class */ (function () {
    //constructor
    function Rombo(dVertical, dHorizontal) {
        this.dVertical = dVertical;
        this.dHorizontal = dHorizontal;
    }
    Rombo.prototype.get_area = function () {
        var area = this.dVertical * this.dHorizontal;
        return area;
    };
    return Rombo;
}());
//instanciando obj de la clase Rombo
var rombo1 = new Rombo(2, 3);
console.log('Datos del Rombo');
console.log("Diagonal Vertical: " + rombo1.dVertical);
console.log("Diagonal Horizontal: " + rombo1.dHorizontal);
//Obteniendo el area
console.log("Área del Rombo: " + rombo1.get_area());
