/*PARÁMETROS DE TIPO INTERFACE.
Un método o función puede recibir como parámetro una interface. Luego le podemos pasar objetos de distintas clases que implementan dicha interface: 
*/
interface Figura { 
    superficie: number; 
    perimetro: number; 
    calcularSuperficie(): number; 
    calcularPerimetro(): number; 
}
class Cuadrado implements Figura { 
    superficie: number; 
    perimetro: number; 
    constructor(private lado:number) { 
        this.superficie = this.calcularSuperficie(); 
        this.perimetro = this.calcularPerimetro();
    }
    calcularSuperficie(): number { 
        return this.lado * this.lado; 
    } 
    calcularPerimetro(): number { 
        return this.lado * 4; 
    } 
}
class Rectangulo implements Figura { 
    superficie: number; 
    perimetro: number;
    constructor(private ladoMayor:number, private ladoMenor:number) { 
        this.superficie = this.calcularSuperficie(); 
        this.perimetro = this.calcularPerimetro(); 
    }
    calcularSuperficie(): number { 
        return this.ladoMayor * this.ladoMenor; 
    } 
    calcularPerimetro(): number { 
        return (this.ladoMayor * 2) + (this.ladoMenor * 2); 
    }
}    

function imprimir(fig: Figura) { 
    console.log(`Perimetro: ${fig.calcularPerimetro()}`); 
    console.log(`Superficie: ${fig.calcularSuperficie()}`); 
}
let cuadrado1: Cuadrado; 
cuadrado1 = new Cuadrado(10); 
console.log('Datos del cuadrado'); 
imprimir(cuadrado1); let rectangulo1: 
Rectangulo; rectangulo1 = new Rectangulo(10, 5); 
console.log('Datos del rectángulo'); 
imprimir(rectangulo1);

//Objetos a partir de una interface
console.log("Creacion de Objetos a partir de una interface");
interface Punto { 
    x: number; 
    y: number; 
} 
let punto1: Punto; 
punto1 = {x:10, y:20}; 
console.log(punto1);

