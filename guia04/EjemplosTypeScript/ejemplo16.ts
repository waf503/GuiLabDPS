
//Acotaciones
class Operacion {
    sumar(...valores:number[]){
        let suma = 0;
        for(let x=0;x<valores.length;x++)
        suma+=valores[x];
        return suma;
    }
}
let op: Operacion;
op=new Operacion();
console.log(op.sumar(1,2,3));