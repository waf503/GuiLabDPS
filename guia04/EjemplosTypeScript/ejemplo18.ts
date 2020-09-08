//Clases abstractas

abstract class Operacion {
    constructor(public valor1: number, public valor2: number, public resultado: number = 0){}

    abstract operar():void;
    imprimir(){
        console.log(`Resultado: ${this.resultado}`);
    }
}

class Suma extends Operacion {
    constructor(v1: number, v2:number){
        super(v1,v2);
    }
    operar(){
        this.resultado = this.valor1 + this.valor2;
    }
}

class Resta extends Operacion { 
    constructor(v1:number, v2:number) {
         super(v1,v2); 
        } 
        operar() { 
            this.resultado = this.valor1 - this.valor2; 
        } 
    } 
    let suma1: Suma;
    suma1=new Suma(10, 4); 
    suma1.operar(); 
    suma1.imprimir(); 
    let resta1: Resta; 
    resta1=new Resta(10, 4); 
    resta1.operar(); 
    resta1.imprimir();