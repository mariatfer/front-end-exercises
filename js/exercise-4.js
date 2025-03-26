// Primer código

const usuario = {
  // Cambio de var por const para evitar sobreescritura de la variable
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

function nombreUsuario(user) {
  return `Me llamo ${user.nombre} ${user.apellido}`; // Reducción de codigo y uso de template string
}

console.log(nombreUsuario(usuario));

// Segundo código

// Se ha utilizado el primer principio SOLID (Responsabilidad única)
const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userData(user) {
  const fullName = `${user.name} ${user.last}`;
  return `Me llamo ${fullName}`;
}

function userAnnualSalary(user) {
  const annualSalary = user.salary * 12;
  return `Cobro ${annualSalary}€ al año`;
}

console.log(userData(user));
console.log(userAnnualSalary(user));

// Tercer código

const user2 = {
  // Se ha cambiado el nombre de la variable
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function esExtrangero(user) {
  // Uso de Early return
  if (user.nationality === "España") {
    return "No es apto para la ayuda del gobierno";
  }
  if (user.age != "30") {
    return "No es apto para la ayuda del gobierno";
  }
  return "Apto para la ayuda del gobierno";
}

console.log(esExtrangero(user));
