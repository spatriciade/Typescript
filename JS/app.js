const square = (number) => {
    return number * number;
};
console.log(square(2));
//Anotación de tipo primitivo
let user = "John";
let num = 11;
let isActive = true;
//tipificacioón inferida
//no es necesario especificar el tipo de dato, TypeScript lo infiere
let hello = "world";
//hello = 15; // Esto causará un error de tipo
//anotacion de tipos de array
const heroes = ["Batman", "Superman", "Spiderman"];
const numbers = [1, 2, 3, 4, 5];
//anotacion de tipos de funcion
let sayHello;
sayHello = (greet) => `Hello ${greet}`;
//anotacion de tipos de objeto
let hero;
hero = {
    character: "Batman",
    powers: ["Intelligence", "Wealth", "Martial Arts"],
};
