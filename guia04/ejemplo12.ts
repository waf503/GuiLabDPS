//operador spread typescript
function myFunction(x, y, z):number { 
    return x+y+z;
}
 
var parametersArray = [10, 11, 12];
console.log(myFunction(...parametersArray));