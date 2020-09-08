//declaramos la clase
class Persona{
    //Definiendo constructor
    constructor(public nombre:string, public edad:number){}
    //funcion imprimir
    imprimir(){
        console.log(`Nombre: ${this.nombre} y edad:${this.edad}`);
    }
}
//instanciando
let persona1: Persona;
persona1 = new Persona('Juan', 45);
persona1.imprimir();