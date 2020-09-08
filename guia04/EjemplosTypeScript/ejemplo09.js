//Parametros opcionales
function sumar(valor1, valor2, valor3) {
    if (valor3) {
        return valor1 + valor2 + valor3;
    }
    return valor1 + valor2;
}
//enviando solo dos parametros
console.log("Sumando dos numeros: " + sumar(5, 4));
console.log("Sumando tres numeros: " + sumar(5, 4, 1));
