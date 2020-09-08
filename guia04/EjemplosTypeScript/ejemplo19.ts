//Interfaces
/** Una interface declara una serie de métodos y propiedades que deben ser implementados luego por una o más clases.
Las interfaces vienen a suplir la imposibilidad de herencia múltiple.
Por ejemplo podemos tener dos clases que representen un avión y un helicóptero. Luego plantear una interface con un método llamado volar.
 Las dos clases pueden implementar dicha interface y codificar el método volar (los algoritmos seguramente*/

interface Punto{
    imprimir():void;
}

class PuntoPlano implements Punto{
    constructor(private x: number, private y: number){

    }
    imprimir(){
        console.log(`Punto en el plano: (${this.x},${this.y})`);
    }
}
class PuntoEspacio implements Punto{
    constructor(private x: number, private y: number, private z: number){

    }
    imprimir(){
        console.log(`Punto en el plano: (${this.x},${this.y},${this.z})`);
    }
}

let puntoPlano1: PuntoPlano;
puntoPlano1 = new PuntoPlano(10, 4); 
puntoPlano1.imprimir();
let puntoEspacio1: PuntoEspacio; 
puntoEspacio1 = new PuntoEspacio(20, 50, 60); 
puntoEspacio1.imprimir();