function operar(n1, n2, func) {
    return func(n1, n2);
}
console.log(operar(3, 7, function (x, y) {
    return x + y;
}));
