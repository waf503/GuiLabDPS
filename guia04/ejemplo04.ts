//Modificador readonly
class Articulo{
    readonly codigo: number;
    descripcion: string;
    precio: number;
    //Constructor
    constructor(codigo:number, descripcion:string, precio: number)
    {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    //metodo imprimir
    imprimir(){
        console.log(`\nCodigo:${this.codigo} Descripcion:${this.descripcion} Precio:${this.precio}`);
    }
}

let articulo1: Articulo;
articulo1 = new Articulo(1,'papas',12.5);
articulo1.imprimir();

