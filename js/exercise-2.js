console.log(a); // Devuelve que la variable a no se encuentra definida
var a = "hola";

console.log(b); // Devuelve que la variable a no se encuentra definida
var b = "hola";

console.log(c); // Devuelve que la variable a no se encuentra definida
var c = "hola";

sayHi(); // Devuelve 'Hola desde sayHi!' porque lleva las funciones arriba del todo antes de ejecutarlo

function sayHi() {
  console.log("Hola desde sayHi!");
}

function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye(); // Devuelve 'Adios desde sayBye!'
