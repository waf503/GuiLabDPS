//Modificador readonly
var Articulo = /** @class */ (function () {
    //Constructor
    function Articulo(codigo, descripcion, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    //metodo imprimir
    Articulo.prototype.imprimir = function () {
        console.log("\nCodigo:" + this.codigo + " Descripcion:" + this.descripcion + " Precio:" + this.precio);
    };
    return Articulo;
}());
var articulo1;
articulo1 = new Articulo(1, 'papas', 12.5);
articulo1.imprimir();
