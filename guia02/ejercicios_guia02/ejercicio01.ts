//Clase rombo

class Rombo{
    //atributos
    dVertical:number;
    dHorizontal:number;
    //constructor
    constructor(dVertical?:number,dHorizontal?:number){
        this.dVertical = dVertical;
        this.dHorizontal = dHorizontal;
    }

    get_area():number{
        var area:number = this.dVertical*this.dHorizontal;

        return area;
    }

}

//instanciando obj de la clase Rombo
let rombo1 = new Rombo(2,3);

console.log('Datos del Rombo');
console.log("Diagonal Vertical: "+rombo1.dVertical);
console.log("Diagonal Horizontal: "+rombo1.dHorizontal);

//Obteniendo el area
console.log("Área del Rombo: "+rombo1.get_area());
