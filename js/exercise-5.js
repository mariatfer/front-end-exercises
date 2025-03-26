const user = {
    nombre: "Pedro",
    apellido: "Sánchez",
    edad: 45
};

const user2= {
    nombre: "Juan",
    apellido: "Rodríguez",
    edad: 45
};

function findAnimal() {
    // ...
}

const color = "green";

const myMap = new Map();
myMap.set("moroso", user);
myMap.set("agarrado", user);
myMap.set("generoso", user2);
myMap.set("funcion", findAnimal);
myMap.set("color", color);


for (const element of myMap.values()) {
    console.log(element);
}

console.log(myMap.get("moroso"));
console.log("Exite la clave hola en el map: " + myMap.has("hola"));
console.log(`Tamaño total del map: ${myMap.size}`);

myMap.forEach(element => {
    console.log(element);
});

myMap.delete("agarrado");

myMap.clear();
