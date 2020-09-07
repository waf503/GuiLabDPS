//operador spread typescript
function myFunction(x, y, z) {
    return x + y + z;
}
var parametersArray = [10, 11, 12];
console.log(myFunction.apply(void 0, parametersArray));
