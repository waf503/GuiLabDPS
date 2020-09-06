class Dado {
    private valor: number;
    //metodo tirar
    public tirar(){
        this.generar();
    }
    //metodo generar()
    private generar(){
        this.valor = Math.floor(Math.random()*6) + 1;//funcion que obtiene un numero random
    }
    //metodo imprimir
    public imprimir(){
        console.log(`Salio el valor ${this.valor}`);
    }
}

let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();