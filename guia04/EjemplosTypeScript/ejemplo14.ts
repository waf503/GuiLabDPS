type Operacion=(x: number, y:number)=>number;

function operar(n1:number, n2:number, func: Operacion): number {
    return func(n1, n2);
    
}

console.log(operar(3,7,(x: number, y:number): number => {
    return x+y;
}))