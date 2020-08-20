class Calculadora{
    //propiedades
    numero1:number;
    numero2:number;

    constructor(numero1:number,numero2:number){
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    operacionesBasicas(){
        var suma:number;
        var resta:number;
        var multi:number;
        var div:number;

        suma = this.numero1 + this.numero2;
        resta = this.numero1 - this.numero2;
        multi = this.numero1 * this.numero2;
        div = Math.round((this.numero1 / this.numero2)*100)/100;

        console.log("\nOPERACIONES BASICAS\n"+
                    this.numero1+" + "+this.numero2+" = "+suma+"\n"+
                    this.numero1+" - "+this.numero2+" = "+resta+"\n"+
                    this.numero1+" X "+this.numero2+" = "+multi+"\n"+
                    this.numero1+" / "+this.numero2+" = "+div+"\n"
        )
    }
}

//Instanciando Objeto de Calculadora
let calculadora01 = new Calculadora(3,2);
calculadora01.operacionesBasicas();