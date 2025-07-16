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

//interfaces

interface heroInterface {
  character: string;
  powers: string[];
}

const Hulk: heroInterface = {
  character: "Bruce Banner",
  powers: ["Intelligence", "Wealth", "Martial Arts"],
};

//Alias de tipo

type seriesType = {
  title: string;
  mainCharacter: string;
  seasons: number;
};

const series1: seriesType = {
  title: "From",
  mainCharacter: "Monsters",
  seasons: 3,
};

const series2: seriesType = {
  title: "Games of Thrones",
  mainCharacter: "Dragons",
  seasons: 5,
};

//interfaces como tipos
interface Login<U, P> {
  user: U;
  password: P;
}
let user1: Login<string, string> = {
  user: "Jhon",
  password: "abcd",
};
let user2: Login<string, number> = {
  user: "Jhon",
  password: 1234,
};

//Tipos enumerados

enum Sizes {
  SMALL,
  MEDIUM,
  LARGE,
  X_LARGE,
}
let pulloverSizes = Sizes.MEDIUM;

//Tipado dinámico

let password: any = "abcd";
password = 1234;
password = [];

let password2: unknown = true;
password2 = 1234;
//let password3 = password2+123
let password3 = password2 + "true";
console.log(typeof password3);
console.log(password3);

//Uniones, intersecciones,tipos literales

interface Bear {
  weight: number;
  color: string;
}
interface Tyger {
  weight: number;
  speed: number;
}
interface Lion{
  strenght:string;
  speed:number;

}

let word: number | string;
word = 1234;
word = "abcd";

let animal: Bear = {
  weight: 200,
  color: "white",
};
let animal2: Bear | Tyger;
animal2 = {
  weight: 250,
  color: "brown",
};

animal2 = {
  weight: 150,
  speed: 50,
  color: "pink",
};
 let animal3 : Bear |(Tyger & Lion)

 animal3 = {
  weight:300,
  color:"brown",
  speed:150,
  strenght:"max"
 }

 hello = undefined;
 console.log(typeof hello);
 hello = null;
 console.log(typeof hello);
 console.log(hello);

 const sayHello2 = (greet:string = "Patricia"):void => {
  console.log("Hello"+ greet);
 
   }
 
sayHello2();
sayHello2("Silvia");
const retornoInancalzable = ():never => {
  throw TypeError ("Sourcing went wrone");
}
const retornoInancalzable2 = (number:number):never => {
  while(true){
    console.log(number++);    
  }
}