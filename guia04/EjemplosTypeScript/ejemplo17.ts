//herencia la herencia es otra caracteristica fundamental de la proceamacion orientada a objetos y TS lo implementa
class Persona {
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }

}

class Empleado extends Persona{
    private sueldo:number;
    constructor(nombre:string, edad:number, sueldo:number){
        super(nombre, edad);
        this.sueldo = sueldo;
    }
    imprimir(){
        super.imprimir();
        console.log(`Sueldo: ${this.sueldo}`);
    }
    pagaImpuesto(){
        if(this.sueldo>5000){
            console.log(`${this.nombre} debe de pagar impuestos`);
        }        
        else {
            console.log(`${this.nombre} no debe pagar impuestos`);
        }
    }
}

const persona1 = new Persona('Juan',44);
persona1.imprimir();

const empleado1 = new Empleado('Ana',22,7000);
const empleado2 = new Empleado('Wilmer',20,2000);
empleado1.imprimir();
empleado2.imprimir();
empleado1.pagaImpuesto();
empleado2.pagaImpuesto();