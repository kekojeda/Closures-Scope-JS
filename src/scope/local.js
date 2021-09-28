//Lexical Scope
const hello = "Hello World Global";

const helloWorld = () => {
    const hello = "Hello World Local";
    console.log(hello);
}

helloWorld();
console.log(hello);
