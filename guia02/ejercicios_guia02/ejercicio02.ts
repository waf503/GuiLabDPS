//Creando la intefaz

interface superHero{
    nombre:string;
    poderes:Array<string>;
}

let spiderman:superHero = {
    nombre:'Peter Parker',
    poderes:["trepar","Fuerza","agilidad","tela araña"]
};

console.log(spiderman.nombre);
console.log(spiderman.poderes);