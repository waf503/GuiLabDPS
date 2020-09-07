//Parametros por Defecto
/*Esta caracteristica de TypeScript nos permite asignar un valor por defecto a un parametro para los casos en que la llamada a la misma no se le envie */
function sumar(valor1, valor2, valor3) {
    if (valor3 === void 0) { valor3 = 0; }
    return valor1 + valor2 + valor3;
}
console.log(sumar(5, 4));
console.log(sumar(5, 4, 3));
