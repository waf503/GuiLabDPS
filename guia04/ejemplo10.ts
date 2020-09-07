//Parametros por Defecto
/*Esta caracteristica de TypeScript nos permite asignar un valor por defecto a un parametro para los casos en que la llamada a la misma no se le envie */
function sumar(valor1:number,valor2:number, valor3:number=0):number {
    return valor1+valor2+valor3;    
}
console.log(sumar(5,4));
console.log(sumar(5,4,3));