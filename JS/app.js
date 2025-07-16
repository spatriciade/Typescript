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
const Hulk = {
    character: "Bruce Banner",
    powers: ["Intelligence", "Wealth", "Martial Arts"],
};
const series1 = {
    title: "From",
    mainCharacter: "Monsters",
    seasons: 3,
};
const series2 = {
    title: "Games of Thrones",
    mainCharacter: "Dragons",
    seasons: 5,
};
let user1 = {
    user: "Jhon",
    password: "abcd",
};
let user2 = {
    user: "Jhon",
    password: 1234,
};
//Tipos enumerados
var Sizes;
(function (Sizes) {
    Sizes[Sizes["SMALL"] = 0] = "SMALL";
    Sizes[Sizes["MEDIUM"] = 1] = "MEDIUM";
    Sizes[Sizes["LARGE"] = 2] = "LARGE";
    Sizes[Sizes["X_LARGE"] = 3] = "X_LARGE";
})(Sizes || (Sizes = {}));
let pulloverSizes = Sizes.MEDIUM;
//Tipado dinámico
let password = "abcd";
password = 1234;
password = [];
let password2 = true;
password2 = 1234;
//let password3 = password2+123
let password3 = password2 + "true";
console.log(typeof password3);
console.log(password3);
let word;
word = 1234;
word = "abcd";
let animal = {
    weight: 200,
    color: "white",
};
let animal2;
animal2 = {
    weight: 250,
    color: "brown",
};
animal2 = {
    weight: 150,
    speed: 50,
    color: "pink",
};
let animal3;
animal3 = {
    weight: 300,
    color: "brown",
    speed: 150,
    strenght: "max"
};
hello = undefined;
console.log(typeof hello);
hello = null;
console.log(typeof hello);
console.log(hello);
const sayHello2 = (greet = "Patricia") => {
    console.log("Hello" + greet);
};
sayHello2();
sayHello2("Silvia");
const retornoInancalzable = () => {
    throw TypeError("Sourcing went wrone");
};
const retornoInancalzable2 = (number) => {
    while (true) {
        console.log(number++);
    }
};
//Declarando variables
let greet;
let number;
let students;
//Assigning values
greet = "Hello World!";
number = 22.3;
students = ["a", "b"];
let hero3 = {
    heroName: "Iron Man",
    power3: "armour",
};
let num3;
num3 = {
    3: 3
};
let num2 = 2;
let evenNumber = 6;
