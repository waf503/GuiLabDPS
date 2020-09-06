//Metodos estaticos
//igual que las propiedades estaticas loe metodos estaticos se les accede por el nombre de la clase Este ticpo de metodos solo pueden acceder a propiedades estaticas veamos:
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.mayor = function (v1, v2) {
        if (v1 > v2) {
            return v1;
        }
        else {
            return v2;
        }
    };
    Matematica.menor = function (v1, v2) {
        if (v1 < v2)
            return v1;
        else
            return v2;
    };
    Matematica.aleatorio = function (inicio, fin) {
        return Math.floor((Math.random() * (fin + 1 - inicio)) + inicio);
    };
    return Matematica;
}());
var x1 = Matematica.aleatorio(1, 5);
var x2 = Matematica.aleatorio(1, 5);
console.log("El mayor entre " + x1 + " y " + x2 + " es " + Matematica.mayor(x1, x2));
//console.log(`El menor entre ${x1} y ${x2} es ${Matematica.menor(x1,x2)}`);
