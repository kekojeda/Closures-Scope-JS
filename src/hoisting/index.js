//Hoisting (Levantamiento de variables)
a = 2;
var a;
console.log(a);

console.log(b);
var b = 2;

function nameOfDog(name) {
    console.log(name);
}

nameOfDog("Disney");


nameOfDog("Disney");

function nameOfDog(name) {
    console.log(name);
}

