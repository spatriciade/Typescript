const square = (number: number) => {
  return number * number;
};
console.log(square(2));
//Anotación de tipo primitivo

let user: string = "John";
let num: number = 11;
let isActive: boolean = true;
//tipificacioón inferida
//no es necesario especificar el tipo de dato, TypeScript lo infiere
let hello = "world";
//hello = 15; // Esto causará un error de tipo
//anotacion de tipos de array
const heroes: string[] = ["Batman", "Superman", "Spiderman"];
const numbers: number[] = [1, 2, 3, 4, 5];

//anotacion de tipos de funcion

let sayHello: (greeting: string) => string;
sayHello = (greet) => `Hello ${greet}`;

//anotacion de tipos de objeto
let hero: {
  character: string;
  powers: string[]; // array de strings
};

hero = {
  character: "Batman",
  powers: ["Intelligence", "Wealth", "Martial Arts"],
};
